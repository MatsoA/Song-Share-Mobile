import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';

//Icon List: https://oblador.github.io/react-native-vector-icons/

const Appbar = () => (
    <AppBar
      title="Song Share"
      leading={props => (
        <IconButton icon={props => <Icon name="navicon" {...props} />} {...props} />
      )}
      trailing={props => (
        <HStack>
          <IconButton
            icon={props => <Icon name="search" {...props} />}
            {...props}
          />
          <IconButton
            icon={props => <Icon name="ellipsis-v" {...props} />}
            {...props}
          />
        </HStack>
      )}
    />
  );

export default Appbar