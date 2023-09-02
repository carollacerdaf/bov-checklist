export function formatDate(isodate: string): string {
    return new Date(isodate).toISOString()
    .split('T')[0].split('-').reverse().join('/')
}