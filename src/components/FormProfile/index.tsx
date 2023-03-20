import * as S from "./styles";
import Heading from "../Heading";
import TextField from "../TextField";
import Button from "../Button";

const FormProfile = () => {
  return (
    <S.Wrapper>
      <Heading lineBottom color="black" size="small">
        My profile
      </Heading>
      <S.Form>
        <TextField
          name="name"
          placeholder="Name"
          label="Name"
          initialValue="Jhon Doe"
        />
        <TextField
          name="email"
          type="email"
          placeholder="E-mail"
          initialValue="jhondoe@gmail.com"
          label="E-mail"
          disabled
        />
        <TextField
          name="password"
          type="password"
          placeholder="Type your password"
          label="Password"
        />
        <TextField
          name="new_password"
          type="password"
          placeholder="New password"
          label="New password"
        />
        <Button size="large">Save</Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default FormProfile;
