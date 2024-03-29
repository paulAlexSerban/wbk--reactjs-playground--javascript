import { Text, Color, Button, Margin } from '@prj--reactjs-application-library/boilerplate-lib';

import '@prj--reactjs-application-library/boilerplate-lsg/lib/atoms/utilities.css';
import '@prj--reactjs-application-library/boilerplate-lsg/lib/atoms/text.css';
import '@prj--reactjs-application-library/boilerplate-lsg/lib/atoms/button.css';
import '@prj--reactjs-application-library/boilerplate-lsg/lib/atoms/margin.css';
import '@prj--reactjs-application-library/boilerplate-lsg/lib/global.css';

const App = () => {
    return (
        <Margin space="xl">
            <Color hexCode="#ff0000" width="lg" height="lg" />
            <Text size="xl">Hello World!</Text>
            <Button label="Click me" />
        </Margin>
    );
};

export default App;
