import React, { ChangeEvent, FormEvent, FC } from 'react';
import { FlexContainer, H1 } from 'styles/shared.styled';
import styled from 'styled-components';

const RegionInout = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #fff;
  padding: 0 50px 10px 0;
  outline: none;
  color: ${({ theme }) => theme.primary};

  &::placeholder {
    font-weight: 600;
    font-size: 1rem;
    padding-left: 0;
  }
`;

type TProps = {
  changeLocation: (event: FormEvent<HTMLFormElement>) => void;
  changeRegion: (value: string) => void;
};

const Navbar: FC<TProps> = ({ changeLocation, changeRegion }: TProps) => (
  <FlexContainer
    width="100%"
    alignItems="center"
    justifyContent="space-between"
    padding="10px 20px"
  >
    <H1>Weather App</H1>
    <div>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          changeLocation(e);
        }}
      >
        <RegionInout
          type="text"
          placeholder="Select your region"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            changeRegion(e.target.value);
          }}
        />
      </form>
    </div>
  </FlexContainer>
);

export default Navbar;
