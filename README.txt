CutTrack web app

Static PWA build for free static hosting.
Supabase project: zbpswrazoqddqpuuemiu (eu-west-1)
Data table: public.cuttrack_data (RLS enabled; authenticated users can access only their own row).

Files:
- index.html: CutTrack app and Supabase authentication/synchronisation
- manifest.webmanifest: installable app metadata
- sw.js: offline app shell cache
- icon.svg: app icon

To run as an installable PWA, serve over HTTPS. Open the deployed URL in Safari on iPhone and choose Share > Add to Home Screen.
