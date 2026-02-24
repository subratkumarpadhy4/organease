/**
 * Returns the correct image src for display.
 * If the image string is already a base64 data URL, return it as-is.
 * Otherwise, construct the traditional file-based URL.
 */
export const imgSrc = (image, folder) => {
    if (!image) return "";
    if (image.startsWith("data:")) return image;
    const apiURL = process.env.REACT_APP_API_URL || "";
    return `${apiURL}/uploads/${folder}/${image}`;
};
