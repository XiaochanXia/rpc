import PropTypes from 'prop-types';
import { Box, Chip } from '@mui/material';
import React, { useState } from 'react';

export default function TagsWrapper(props) {
    const { limitTags, tags = [], onTagClick, renderTag } = props;

    const [nextTags, setNextTags] = useState(tags);

    React.useEffect(() => {
        if (limitTags) {
            setNextTags(tags.slice(0, limitTags));
        }

    }, []);

    const showAllTags = (e) => {
        // debugger;
        e.stopPropagation();
        setNextTags(tags);
    }

    const handleTagClick = (tag) => () => {
        if (onTagClick) {
            onTagClick(tag);
        }
    }

    const renderSingleTag = (tag) => {
        if (renderTag) {
            return renderTag(tag);
        }
        return <Chip key={tag}
            label={tag}
            size="xs"
            onClick={handleTagClick(tag)}
            sx={{ marginRight: 1, marginTop: 1 }} />;
    }

    return <Box sx={{ paddingBottom: 2, paddingTop: 2, display: 'flex', flexWrap: 'wrap' }}>
        {nextTags.map(tag => renderSingleTag(tag))}
        {tags.length > nextTags.length && <Chip label={`+${tags.length - nextTags.length}`}
            size="xs"
            color='primary'
            variant='outlined'
            sx={{ marginRight: 1, marginTop: 1 }}
            onClick={showAllTags} />}
    </Box>;
}

TagsWrapper.propTypes = {
    limitTags: PropTypes.number,
    tags: PropTypes.array.isRequired,
    renderTag: PropTypes.func,
    onTagClick: PropTypes.func,
}

