import React from 'react';
import { Card } from '@my-scope/ui.card';
import { Heading } from '@my-scope/ui.heading';
import { Text } from '@my-scope/ui.text';
import { CopyBox } from '@teambit/documenter.ui.copy-box';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { ExternalLink } from '@teambit/design.ui.external-link';
import styles from './page.module.scss';

export type PageProps = {} & React.HTMLAttributes<HTMLHeadingElement>;

export function Page({ children }: PageProps) {
  return (
    <ThemeCompositions>
      <div className={styles.page}>
        <Heading>Welcome to Bit</Heading>
        <Text text="Edit this component and see it change" />
        <div className={styles.grid}>
          <ExternalLink href="https://google.com">
            <Card
              link="https://google.com"
              heading="Docs"
              text="see more from the docs"
            />
          </ExternalLink>

          <ExternalLink href="https://google.com">
            <Card
              link="https://bit.dev"
              heading="Demos"
              text="see more from our demo projects"
            />
          </ExternalLink>
          <ExternalLink href="https://google.com">
            <Card
              heading="Self Host"
              text="lean how to self host these components"
            />
          </ExternalLink>
          <ExternalLink href="https://google.com">
            <Card
              heading="Bit Cloud"
              text="lean how to publish to the Bit cloud"
            />
          </ExternalLink>
        </div>

        <Heading element="h2" className={styles.h2}>
          Bit CLI
        </Heading>
        <Text text="Understanding Bit's commands better" />
        <div className={styles.grid}>
          <Card
            link="https://bit.dev"
            heading="Templates"
            text="to see a list of available templates">
            <CopyBox>bit templates</CopyBox>
          </Card>
          <Card heading="Create" text="to create your own components">
            <CopyBox>bit create react-component ui/button</CopyBox>
          </Card>

          <Card heading="Install" text="to install components from elsewhere">
            <CopyBox>bit install @teambit/design.ui.external-link</CopyBox>
          </Card>
          <Card
            heading="Import"
            text="to import components into your workspace">
            <CopyBox>
              bit import '@teambit/documenter.theme.theme-compositions
            </CopyBox>
          </Card>
          <Card heading="Tag" text="to create a version of your components">
            <CopyBox>bit tag --all</CopyBox>
          </Card>
          <Card heading="Snap" text="to snap your components">
            <CopyBox>bit snap --all</CopyBox>
          </Card>
          <Card heading="Export" text="to export your components">
            <CopyBox>bit export</CopyBox>
          </Card>
          <Card
            heading="Remove"
            text="to remove these components and their files">
            <CopyBox>bit remove --delete-files</CopyBox>
          </Card>
        </div>
      </div>
    </ThemeCompositions>
  );
}
