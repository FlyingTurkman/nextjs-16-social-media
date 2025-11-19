















export function nameAvatarConverter(username?: string): string {

    return `${username ? username[0].toUpperCase() : '?'}`
}