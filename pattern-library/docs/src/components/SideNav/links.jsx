import React from 'react';
import { LinkGroup } from '#docs/components/SideNav/utils';
import {
  GettingStarted,
  FormElements,
  DocComponents,
  Buttons
} from '#docs/components/SideNav/dynamicallyGeneratedArticleLinks';

export default function SideNavLinks() {
  return (
    <div>
      <LinkGroup label="Getting Started">
        <GettingStarted />
        <DocComponents />
      </LinkGroup>

      <LinkGroup label="Foundations">
        <FormElements />
        <Buttons />
      </LinkGroup>
    </div>
  );
}

