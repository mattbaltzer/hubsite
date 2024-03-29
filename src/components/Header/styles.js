import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Container } from 'components/ui/Container/styles';

export const Header = styled.header`
  ${tw`bg-orange-200 border-b border-green-500`};
`;

export const Wrapper = styled(Container)`
  ${tw`items-center`};
`;
