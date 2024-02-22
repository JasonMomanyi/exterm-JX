import moment from 'moment-timezone';

export async function updateBioAccordingToTime(conn) {
    const nairobiTime = moment.tz(Date.now(), 'Africa/Nairobi').format('YYYY-MM-DD HH:mm:ss');
    const bio = `time: ${nairobiTime} JasonMomanyic2024`;
    await conn.setStatus(bio);
}

export async function updateBioOnInterval(conn) {
    // Update bio initially
    await updateBioAccordingToTime(conn);

    // Update bio every minute
    setInterval(async () => {
        await updateBioAccordingToTime(conn);
    }, 60000); // 1 minute interval
}
