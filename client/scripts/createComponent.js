const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const COMPONENTS_PATH = 'src/ui/';

readline.question(`Type the component path: `, componentPath => {
  if (!componentPath) return;

  const componentFullName = getComponentFullName(componentPath);
  const componentNameEnding = getComponentNameEnding(componentPath);
  const fullPath = getFullPath(componentPath);

  fs.mkdir(fullPath, { recursive: true }, () => {
    createComponentFile(fullPath, componentFullName, componentNameEnding);
    createStylesFile(fullPath, componentNameEnding);
    createIndexFile(fullPath, componentNameEnding);
  });
  
  readline.close();
});

function getFullPath(path) {
  return `${COMPONENTS_PATH}${path}`;
}

function getComponentNameEnding(path) {
  const splitedName = getSplitedName(path);

  return splitedName[splitedName.length - 1];
}

function getComponentFullName(path) {
  const splitedName = getSplitedName(path);

  return splitedName.join('');
}

function getSplitedName(path) {
  let splitedName = path.split('/');

  const [first, ...rest] = splitedName;

  if (first === 'components') splitedName = rest;

  return splitedName.map(string => capitilizeFirstLetter(string));
}

function capitilizeFirstLetter(string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

function createComponentFile(fullPath, componentFullName, componentNameEnding) {
  const propsTypeName = `T${componentNameEnding}Props`;

  const fileContent =
`import { Container } from './${componentNameEnding}Styles';

type ${propsTypeName} = {
}

const ${componentFullName} = ({}: ${propsTypeName}) => {
  return (
    <Container>

    </Container>
  );
};

export default ${componentFullName};

`;

  fs.writeFile(`${fullPath}/${componentNameEnding}.tsx`, fileContent, () => null);
}

function createStylesFile(fullPath, componentNameEnding) {
  const fileContent =
`import styled from 'styled-components';

export const Container = styled.div` + '`\n`' + `;\n`;

  fs.writeFile(`${fullPath}/${componentNameEnding}Styles.ts`, fileContent, () => null);
}

function createIndexFile(fullPath, componentNameEnding) {
  const fileContent =
`import ${componentNameEnding} from './${componentNameEnding}';

export default ${componentNameEnding};
`;

  fs.writeFile(`${fullPath}/index.ts`, fileContent, () => null);
}
