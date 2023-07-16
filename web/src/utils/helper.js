export const InitialTitle = (title) => {
    const words = title.split(" ")

    if (words.length <= 3) {
        return words.map(word => word.charAt(0)).join("");
    }

    return words[0].charAt(0) + words[1].charAt(0) + words[words.length - 1].charAt(0);
}