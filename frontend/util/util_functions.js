

export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    const sliced = text.slice(0, maxLength - 3);
    if (sliced[sliced.length - 1] === ' ') {
        return sliced.slice(0, sliced.length - 2) + '...';
    } else {
        return sliced + '...';
    }
}