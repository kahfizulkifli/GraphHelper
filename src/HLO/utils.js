function extractDataType(line) {
    // const regex = /%([a-zA-Z0-9_-]+\.\d+)\s*=\s*([^{}]+)\s*\{/;
    const regex = /%([^\\]+)\s=\s*([^{}]+)\s*\{/;
    const match = line.match(regex);

    if (match && match.length >= 3) {
        const variableName = match[1];
        const typePart = match[2].trim();

        return `"${variableName}" [label="${variableName} \\n ${typePart}"];`;
    } else {
        return "[]";
    }
}

// const textLine = "%multiply = f32[] multiply(f32[] %p0.1, f32[] %constant.329), metadata={";
// // 
// const result = extractDataType(textLine);
// console.log(result);

export default extractDataType;
