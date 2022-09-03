import { Meta, moduleMetadata, Story } from '@storybook/angular'
import { UserCardComponent } from './user-card.component'

export default {
  title: 'User/User Card View',
  component: UserCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
      providers: [],
    }),
  ],
} as Meta

const Template: Story<UserCardComponent> = (args) => ({
  component: UserCardComponent,
  props: args,
})

export const DefaultStory = Template.bind({})
DefaultStory.args = {
  users: [
  {image: 'https://i.postimg.cc/rpQNKwX3/images.jpg',  email: 'test2@email.com', name:'Test 2 User',website:'http://www.google.com'},
  ]
}

export const LongNameStory = Template.bind({})
LongNameStory.args = {
  users: [
    {image: 'https://i.postimg.cc/rpQNKwX3/images.jpg',  email: 'test2@email.com', name:'Test 2 User LoremIpsum Lorem Itsu psum Test 2 User',website:'http://www.google.com'},
   ]

}

export const NoImageStory = Template.bind({})
NoImageStory.args = {
  users: [
  {image: '',  email: 'test2@email.com', name:'Test 2 User',website:'http://www.google.com'},
  ]
}

export const NoDataStory = Template.bind({})
NoDataStory.args = {
  users: [ ]
}
