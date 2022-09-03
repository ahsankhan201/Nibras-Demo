import { Meta, moduleMetadata, Story } from '@storybook/angular'
import { TitleBarComponent } from './title-bar.component'

export default {
  title: 'Shared/Common title Bar Component',
  component: TitleBarComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
      providers: [],
    }),
  ],
} as Meta

const Template: Story<TitleBarComponent> = (args) => ({
  component: TitleBarComponent,
  props: args,
})

export const DefaultStory = Template.bind({})
DefaultStory.args = {
  title: "User Component",
  description: "User Description"
}

export const LongDataStory = Template.bind({})
LongDataStory.args = {
  title: "User Component Lorem Ipsum Diestu istu Ipsam Lorem Ipsum Diestu istu Ipsam",
  description: "User Description Lorem Ipsum Diestu istu Ipsam Lorem Ipsum Diestu istu Ipsam"

}


export const NoDataStory = Template.bind({})
NoDataStory.args = {
  title: "",
  description: ""
}
