import BaseInput from '../../components/Base/Input';
import EditorSectionsEmploymentHistory from '../../components/Editor/Sections/EmploymentHistory/EmploymentHistory';
import EditorSectionsPersonalDetails from '../../components/Editor/Sections/PersonalDetails/PersonalDetails';
import { Container, Left, Right } from './EditorStyles';

type TEditorProps = {
};

const ViewsEditor = ({}: TEditorProps) => {
  return (
    <Container>
      <Left>
        <EditorSectionsPersonalDetails />
        <EditorSectionsEmploymentHistory />
      </Left>
      <Right></Right>
    </Container>
  );
}

export default ViewsEditor;
