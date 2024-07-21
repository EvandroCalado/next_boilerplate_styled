import Image from 'next/image';
import { FC } from 'react';
import * as S from './Main.styles';

export interface MainProps {
  title?: string;
}

export const Main: FC<MainProps> = ({ title = 'Next Boilerplate' }) => {
  return (
    <S.Wrapper>
      <S.Hero>
        <h1>{title}</h1>

        <Image
          src="/image.svg"
          alt="Next Boilerplate"
          width={224}
          height={224}
          priority
        />
      </S.Hero>

      <S.Content>
        <ul>
          <li>
            <span>📝 Typescript: </span>Um superconjunto de JavaScript que
            adiciona tipagem estática.
          </li>
          <li>
            <span>💄 Styled-Components: </span>Uma biblioteca para escrever CSS
            dentro do JavaScript.
          </li>
          <li>
            <span>📚 Storybook: </span>Uma ferramenta para desenvolver
            componentes de UI de forma isolada.
          </li>
          <li>
            <span>🧪 Jest: </span>Um framework de testes em JavaScript com foco
            em simplicidade.
          </li>
          <li>
            <span>🔮 Plop: </span>Uma ferramenta para criar arquivos ou
            diretórios de maneira consistente e automática.
          </li>
          <li>
            <span>🪛 ESLint: </span>Uma ferramenta de linting para identificar e
            corrigir problemas no código JavaScript/TypeScript.
          </li>
          <li>
            <span>🪞 Prettier: </span>Um formatador de código que garante um
            estilo consistente em todo o projeto.
          </li>
          <li>
            <span>🐻 Husky: </span>Uma ferramenta para gerenciar hooks de Git.
          </li>
        </ul>
      </S.Content>
    </S.Wrapper>
  );
};
