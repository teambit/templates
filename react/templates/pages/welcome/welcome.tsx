import React from 'react';
import { Card } from '@teambit/react.templates.ui.card';
import { Heading } from '@teambit/react.templates.ui.heading';
import { Text } from '@teambit/react.templates.ui.text';
import styles from './welcome.module.scss';

export function Welcome() {
  return (
    <div className={styles.page}>
      <Heading className={styles.h1}>Welcome to Bit</Heading>
      <Text
        className={styles.texts}
        text="Edit this component and see it change in the UI or play with the commands below to learn more about how Bit works."
      />
      <div className={styles.grid}>
        <Card
          link="https://bit.dev/docs/getting-started/installing-bit/installing-bit"
          heading="Docs"
          text="see more from the docs"
        />

        <Card
          link="https://bit.dev/learn-bit-react"
          heading="Demos"
          text="see more from our demo projects"
        />
        <Card
          link="https://github.com/teambit/bit/discussions/4707"
          heading="Self Host"
          text="lean how to self host these components"
        />
        <Card
          link="https://bit.dev/docs/scope/scope-overview"
          heading="Bit Cloud"
          text="lean how to publish to the Bit cloud"
        />
      </div>

      <Heading element="h2" className={styles.h2}>
        Bit CLI
      </Heading>
      <Text className={styles.texts} text="Understanding Bit's Commands" />

      <div className={styles.grid}>
        <Card
          link="https://bit.dev/docs/dev-services-overview/generator/generator-overview"
          heading="Templates"
          text="see a list of available templates"
          command="bit templates"
        />
        <Card
          link="https://bit.dev/docs/getting-started/composing/spec-breakdown"
          heading="Create"
          text="create your own components"
          command="bit create react ui/button"
        />
        <Card
          link="https://bit.dev/docs/getting-started/composing/use-dependencies"
          heading="Install"
          text="install components from elsewhere"
          command="bit install @teambit/design.templates.ui.external-link"
        />
        <Card
          link="https://bit.dev/docs/getting-started/collaborate/importing-components"
          heading="Import"
          text="import components into your workspace"
          command="bit import @teambit/documenter.theme.theme-compositions"
        />
        <Card
          link="https://bit.dev/docs/components/tags"
          heading="Tag"
          text="create a version of your components"
          command={`bit tag --all --message "first version"`}
        />
        {/* <Card
          link=""
          heading="Snap"
          text="snap your components"
          command="bit snap --all"
        /> */}
        <Card
          link="https://bit.dev/docs/getting-started/collaborate/exporting-components"
          heading="Export"
          text="export your components"
          command="bit export"
        />
        <Card
          link="https://bit.dev/docs/components/removing-components"
          heading="Remove"
          text="remove components and their files"
          command={`bit remove "ui/*" --delete-files`}
        />
      </div>
    </div>
  );
}
