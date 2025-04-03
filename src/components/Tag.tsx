import React from 'react';
import { Text, TextStyle } from 'react-native';

interface TagProps {
    tag: string;
}

const Tag: React.FC<TagProps> = ({ tag }) => {
    return <Text testID={`tag-${tag}`} style={tagStyle}>{tag}</Text>;
};

const tagStyle: TextStyle = {
    display: 'flex',
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 12,
    lineHeight: 20,
    borderRadius: 4,
    backgroundColor: '#E3F2FD',
    borderColor: '#0D47A1',
    borderWidth: 1,
    color: '#0D47A1',
};

export default Tag;