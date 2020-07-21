import {createStackNavigator} from 'react-navigation-stack';
import Sessions from '../screens/sessions/Sessions';
import VideoCall from '../screens/videoCall/VideoCall';
import Home from '../screens/dashboard/Home';
import ChatScreen from '../screens/chat/ChatScreen';
import AddNotes from '../screens/notes/AddNotes';
import ChatListing from '../screens/chat/ChatListing';

const PostAuthStack = createStackNavigator(
    {
      Home: Home,
      Sessions: Sessions,
      VideoSession: VideoCall,
      ChatScreen: ChatScreen,
      AddNotes: AddNotes,
      ChatListing: ChatListing
    },
    {
      initialRouteName: 'Home',
      headerMode: false,
    },
  );

export default PostAuthStack;