import * as React from 'react';

import { Body } from 'src/components/molecules/Body';
import { Header } from 'src/components/organisms/Header';
import { OnDidMount } from 'src/composers/OnDidMount';
import { ShadowState } from 'src/composers/ShadowState';
import { State } from 'src/composers/State';
import { Margin } from 'src/styles/decorators/Margin';
import { Padding } from 'src/styles/decorators/Padding';
import { gutter, toPx } from 'src/styles/mixins';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.SFC<ILayoutProps> = ({ children }) => {
  return (
    <State initial={{ top: 0 }}>
      {({ set, state }) => (
        <ShadowState>
          {({ set: setShadowState, shadowState }) => (
            <React.Fragment>
              <Header setRef={(ref) => {
                setShadowState({ headerRef: ref });
              }} />

              <OnDidMount action={() => set({ top: shadowState.headerRef.clientHeight })}>
                <Margin top={toPx(state.top)}>
                  <Padding bottom={toPx(gutter(2))} top={toPx(gutter(2))}>
                    <Body>{children}</Body>
                  </Padding>
                </Margin>
              </OnDidMount>
            </React.Fragment>
          )}
        </ShadowState>
      )}
    </State>
  );
};

export { Layout };
