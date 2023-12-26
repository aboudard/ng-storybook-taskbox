import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { TaskState } from '../reducers/tasks.reducer';
import { provideMockStore } from '@ngrx/store/testing';
import {
  argsToTemplate,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';

import InboxScreenComponent from './inbox-screen';
import { CommonModule } from '@angular/common';
import TaskListComponent from './task-list.component';
import TaskComponent from './task.component';
import { Store, StoreModule } from '@ngrx/store';
import { importProvidersFrom } from '@angular/core';
import { reducers } from '../reducers';
import { fireEvent, within } from '@storybook/testing-library';

const meta: Meta<InboxScreenComponent> = {
  component: InboxScreenComponent,
  title: 'InboxScreen',
  decorators: [
    moduleMetadata({
      declarations: [InboxScreenComponent, TaskListComponent, TaskComponent],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
    applicationConfig({
      providers: [
        Store,
        importProvidersFrom(StoreModule.forRoot(reducers, {})),
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<InboxScreenComponent>;

export const Default: Story = {
  args: {
    error: false,
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const WithInteractions: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Simulates pinning the first task
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    // Simulates pinning the third task
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
  },
};
