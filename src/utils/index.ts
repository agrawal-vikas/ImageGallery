export function extractNameAndEmail(input: string): { name: string; email: string } | null {
    const regex = /([\w.-]+@[\w.-]+\.\w+)\s*\("([^"]+)"\)/;
    const match = input.match(regex);

    if (match) {
        const [, email, name] = match;
        return { name, email };
    }

    return null;
}

export function extractDescriptionWithoutImage(input: string): string | null {
    const regex = /<p>(.*?)<\/p>/gs;
    let match;
    let description = null;

    while ((match = regex.exec(input)) !== null) {
        if (!/<img/.test(match[1])) {
            description = match[1];
            break;
        }
    }

    return description;
}

export function formatUtcToReadableDate(utcString: string): string {
    const date = new Date(utcString);
    if (isNaN(date.getTime())) {
        throw new Error("Invalid UTC date string");
    }
    return date.toLocaleString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
}