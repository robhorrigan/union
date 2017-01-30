import React from 'react';
import { LinkGroup } from 'components/SideNav/utils';
import {
  GettingStarted,
  FormElements,
  DocComponents
} from 'components/SideNav/dynamicallyGeneratedArticleLinks';

export default function SideNavLinks()  {
  return (
    <div>
      <LinkGroup>
        <GettingStarted />
        <DocComponents />
      </LinkGroup>

      <LinkGroup label="Foundations">
        <FormElements />
      </LinkGroup>
    </div>
  );
}

