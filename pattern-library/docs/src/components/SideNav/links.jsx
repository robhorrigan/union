import React from 'react';
import { LinkGroup } from '#docs/components/SideNav/utils';
import {
  GettingStarted,
  FormElements,
  DocComponents,
  Typography
} from '#docs/components/SideNav/dynamicallyGeneratedArticleLinks';

export default function SideNavLinks() {
  return (
    <div>
      <LinkGroup>
        <GettingStarted />
        <DocComponents />
      </LinkGroup>

      <LinkGroup label="Foundations">
        <FormElements />
        <Typography />
      </LinkGroup>
    </div>
  );
}

