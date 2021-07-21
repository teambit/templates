import React from 'react';
import { Card } from '@teambit/react.templates.ui.card';
import { Heading } from '@teambit/react.templates.ui.heading';
import { Text } from '@teambit/react.templates.ui.text';
import styles from './welcome.module.scss';

export function Welcome() {
  return (
      <div className={styles.page}>
        <Heading className={styles.h1}>Welcome to Bit</Heading>
        <Text text="Edit this component and see it change" />
        <div className={styles.grid}>
          <Card
            link="https://harmony-docs.bit.dev/getting-started/installing-bit"
            heading="Docs"
            text="see more from the docs"
          />

          <Card
            link="https://bit.dev/learn-bit-react"
            heading="Demos"
            text="see more from our demo projects"
          />
          <Card
            link="https://harmony-docs.bit.dev/reference/bit-oss-server"
            heading="Self Host"
            text="lean how to self host these components"
          />
          <Card
            link="https://bit.dev/"
            heading="Bit Cloud"
            text="lean how to publish to the Bit cloud"
          />
        </div>

        <Heading element="h2" className={styles.h2}>
          Bit CLI
        </Heading>
        <Text text="Understanding Bit's commands better" />

        <div className={styles.grid}>
          <Card
            link="https://harmony-docs.bit.dev/aspects/generator"
            heading="Templates"
            text="see a list of available templates"
            command="bit templates"
          />
          <Card
            link="https://harmony-docs.bit.dev/building-with-bit/creating-components"
            heading="Create"
            text="create your own components"
            command="bit create react-component ui/button"
          />
          <Card
            link="https://harmony-docs.bit.dev/building-with-bit/consuming-components"
            heading="Install"
            text="install components from elsewhere"
            command="bit install @teambit/design.templates.ui.external-link"
          />
          <Card
            link="https://harmony-docs.bit.dev/building-with-bit/consuming-components#import-components"
            heading="Import"
            text="import components into your workspace"
            command="bit import @teambit/documenter.theme.theme-compositions"
          />
          <Card
            link="https://harmony-docs.bit.dev/building-with-bit/versioning-components"
            heading="Tag"
            text="create a version of your components"
            command="bit tag --all --message 'first version'"
          />
          <Card
            link=""
            heading="Snap"
            text="snap your components"
            command="bit snap --all"
          />
          <Card
            link="https://harmony-docs.bit.dev/building-with-bit/exporting-components"
            heading="Export"
            text="export your components"
            command="bit export"
          />
          <Card
            link="https://harmony-docs.bit.dev/building-with-bit/removing-components"
            heading="Remove"
            text="remove components and their files"
            command="bit remove ui/* --delete-files"
          />
        </div>
      </div>
  );
}
