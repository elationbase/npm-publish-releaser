import fs from 'fs';

const locationPath = 'src/icons';
const iconSourceFolder = `${locationPath}/svg/`;
const iconComponentsFolder = `${locationPath}/components/`;
const indexFilePath = `${iconComponentsFolder}/index.ts`;
const typesFolder = `src/types`;

function formatCase(str) {
  let ans = str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);

  return ans
    .split('-')
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}

function generateSVGComponent(
  contentArray,
  fileName,
  readableName,
  viewboxContent
) {
  const svgPathContent = contentArray.map(
    ({ pathContent, fillContent }) =>
      `<path
        d="${pathContent}"
        fill=${fillContent}
      />`
  );

  return `import type { IconProps } from '../icon.types';

/**
 * Icon ${fileName}
 */

export function ${fileName} ({
  fill = 'currentColor',
  size = 24,
  ariaLabel = '${readableName}',
  ...props
}: IconProps){
  return (
    <svg width={size} height={size} viewBox="${viewboxContent}" aria-label={ariaLabel} {...props}>
      ${svgPathContent.join().replace(/>,/g, '>\n')}
    </svg>
  );
}
`;
}

function generateIconTypes(types, components) {
  const typesNames = types
    .map((componentName) => `| '${componentName}'`)
    .join(' ');
  const typesCompoenets = components
    .map((componentName) => `| '${componentName}'`)
    .join(' ');

  return `export type IconNameTypes = ${typesNames};
          export type IconComponentsTypes = ${typesCompoenets};\r\n`;
}

function generateIconComponents(cb) {
  try {
    const fileNames = [];
    const componentNames = [];
    fs.mkdir(`${iconComponentsFolder}`, { recursive: true }, (err) => {
      if (err) {
        throw err;
      }
    });
    fs.readdir(iconSourceFolder, (_err, files) => {
      if (_err) {
        throw _err;
      }
      files.forEach((file) => {
        fs.readFile(`${iconSourceFolder}/${file}`, 'utf8', (err, data) => {
          if (err) {
            throw err;
          }

          const arr = data.split(/\r?\n/);
          const contentArray = [];
          let viewboxContent;

          arr.forEach((line) => {
            if (line.includes('<svg')) {
              const svgContent = line.split('<svg').pop().split('"');
              const viewboxIndex = svgContent.indexOf(' viewBox=');
              viewboxContent = svgContent[viewboxIndex + 1];
            }
          });

          let defaultFill;
          let index;
          let content, pathContent, fillRuleContent, clipRuleContent;
          let fillContent = '{fill}';
          let fill = '';

          arr.forEach((line) => {
            if (line.includes('<path ')) {
              content = line.split('<path ').pop().split('"');

              index = content.indexOf('d=') && content.indexOf(' d=');
              pathContent = content[index + 1];

              index = content.indexOf('fill=') && content.indexOf(' fill=');
              fill = content[index + 1];

              if (!defaultFill) {
                defaultFill = fill;
              }

              if (defaultFill !== fill) {
                fillContent = '{secondaryFill}';
              }

              contentArray.push({
                pathContent,
                fillContent,
                fillRuleContent,
                clipRuleContent,
              });
            }
          });
          const cleanExtensionFile = file.replace(/\.svg$/, '');
          const readableName = cleanExtensionFile.replace('-', ' ');
          const componentName = formatCase(cleanExtensionFile);
          componentNames.push(componentName);
          fileNames.push(cleanExtensionFile);
          fs.writeFile(
            `${iconComponentsFolder}/${componentName}.tsx`,
            generateSVGComponent(
              contentArray,
              componentName,
              readableName,
              viewboxContent
            ),
            (error) => {
              if (error) {
                throw error;
              }
            }
          );
          if (componentNames.length === files.length) {
            cb(componentNames);

            fs.writeFile(
              `${typesFolder}/icons.ts`,
              generateIconTypes(fileNames, componentNames),
              (error) => {
                if (error) {
                  throw error;
                }
              }
            );
          }
        });
      });
    });
  } catch (err) {
    // eslint-disable-next-line no-undef
    process.exit(err);
  }
}

function generateIndex(fileNames) {
  fs.truncate(indexFilePath, 0, () => {
    fileNames.sort().forEach((fileName) => {
      const line = `export { ${fileName} } from './${fileName}';\n`;

      fs.appendFileSync(indexFilePath, line, 'utf8');
    });
  });
}

function init() {
  if (fs.existsSync(iconComponentsFolder)) {
    fs.rmSync(iconComponentsFolder, { recursive: true });
  }

  generateIconComponents((fileNames) => {
    generateIndex(fileNames);
  });
}

init();
