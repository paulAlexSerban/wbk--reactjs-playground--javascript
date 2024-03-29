import '@prj--reactjs-application-library/generic-lsg/lib/atoms/heading.css';
import '@prj--reactjs-application-library/generic-lsg/lib/atoms/paragraph.css';

import { Heading, Paragraph } from '@prj--reactjs-application-library/generic-lib';
import Tabs from '../molecules/Tabs';
import Section from '../molecules/Section';
import TabButton from '../atoms/TabButton';

import { useState } from 'react';

const Examples = ({ title, data }) => {
    const [selectedTopic, setSelectedTopic] = useState();
    const handleSelect = (selectedButton) => {
        setSelectedTopic(selectedButton);
    };

    const buttons = (
        <>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>
                Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>
                JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>
                Props
            </TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>
                State
            </TabButton>
        </>
    );
    return (
        <Section className="tabbedComponent" title={title} align="left">
            <div className="tabbedComponent__container">
                <Tabs buttons={buttons}>
                    {!selectedTopic && <Paragraph>Select a topic to learn more about it.</Paragraph>}
                    {selectedTopic && (
                        <>
                            <Heading title={data[selectedTopic].title} level={3} align="left" />
                            <Paragraph>{data[selectedTopic].description}</Paragraph>
                            <pre>
                                <code>{data[selectedTopic].code}</code>
                            </pre>
                        </>
                    )}
                </Tabs>
            </div>
        </Section>
    );
};

export default Examples;
