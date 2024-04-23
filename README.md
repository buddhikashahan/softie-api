# softie-api

A module with api collection. Written with only Javascript and a node-friendly streaming interface.

## Support
You can contact me for support on [WhasApp](https://wa.me/94766866297)

## Install

```bash
npm install softie-api@latest
```

Or for Yarn users:
```bash
yarn add softie-api@latest
```

Make sure you're installing the latest version of softie-api to keep up with the latest fixes.

## Usage
```js
const api = require('softie-api');
const url = 'https://www.instagram.com/reel/C5_Gu_uIF9Y';

api.instagramDown(url)
    .then(data => {
        //handle data
       console.log(data);
    })
    .catch(error => {
        // Handle error
        console.log(error);
    });
```
## Functions
| Function  | Description |
| ------------- | ------------- |
| instagramDown  | Download media from instagram  |
| facebookDown  | Download videos from facebook  |
| tiktokDown  | Download videos from tiktok  |
## Sample Output

#### instagramDown:
```output
{
  type: 'video',
  url: 'https://ig211.snap-data.xyz/ig/1713866907/a226853652fa3fd1041467fa545678a31b951a7ee1561e62c50f5abf2d51cbee?file=aHR0cHM6Ly9zY29udGVudC5jZG5pbnN0YWdyYW0uY29tL3YvdDY2LjMwMTAwLTE2LzEwMDAwMDAwXzE2MjgwNDkxNDQ1OTk1MTRfMzMyNDI2MDkwNTU3MjU3MDE3MV9uLm1wND9fbmNfaHQ9c2NvbnRlbnQtc2luNi0zLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDYmX25jX29oYz1lVHEzZDA2QnR5NEFiNUVSRUFuJmVkbT1BUF9WMTBFQkFBQUEmY2NiPTctNSZvaD0wMF9BZkJuNmVTYm5PUHpMZVZmdnlMUzhtR3A0SE1fckh6bTBKSWh6akJ6LTJyaTJBJm9lPTY2Mjk2MEM1Jl9uY19zaWQ9Mjk5OWI4Jm5hbWU9U2F2ZUlHLkFwcF8zMzUwNDI2MjY1NTgxNTQzMjU2Lm1wNA'
}
```
#### facebookDown:
```output
{
  title: 'No video title',
  description: 'Description: No video description... \nDuration: 06 minutes, 40 seconds',
  sdLink: 'https://video-ord5-2.xx.fbcdn.net/v/t42.1790-2/10000000_454691673085185_5703985504496253926_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjM2MCwicmxhIjoxNTAyLCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCIsInZpZGVvX2lkIjo0MzMzODcyMjUyNzgxNzV9&_nc_ohc=fOf-YQJ-dQsAb6x-g_d&rl=360&vabr=200&_nc_ht=video-ord5-2.xx&oh=00_AfBLxz8MFXUDOCiiDDigdESxKEvMsOvJqodikXmFUFM0Yg&oe=662D430A&dl=1',
  hdLink: 'https://video-ord5-2.xx.fbcdn.net/o1/v/t2/f1/m69/GOw8_RlYmWBc1ssCACPYvtPUOSVMbmdjAAAF.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=video-ord5-2.xx.fbcdn.net&_nc_cat=106&strext=1&vs=5a95cf7b80c47e0a&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HT3c4X1JsWW1XQmMxc3NDQUNQWXZ0UFVPU1ZNYm1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dNWjJFaEhpYUxyX3otNEJBSFA1M3NzT2lSRi1idjRHQUFBRhUCAsgBAEsHiBJwcm9ncmVzc2l2ZV9yZWNpcGUBMQ1zdWJzYW1wbGVfZnBzABB2bWFmX2VuYWJsZV9uc3ViACBtZWFzdXJlX29yaWdpbmFsX3Jlc29sdXRpb25fc3NpbQAoY29tcHV0ZV9zc2ltX29ubHlfYXRfb3JpZ2luYWxfcmVzb2x1dGlvbgAddXNlX2xhbmN6b3NfZm9yX3ZxbV91cHNjYWxpbmcAEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcjBdAAAAAAAAAABERAAAAJvrKtNW784wMFQIoAkMzGAt2dHNfcHJldmlldxwXQHkMKPXCj1wYIWRhc2hfZ2VuMmh3YmFzaWNfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsKiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50BTk5MjIzEW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPNDMzMzg3MjI1Mjc4MTc1Em9lbV92aWRlb19hc3NldF9pZA80NTY5MTQ0MDYxOTcyMDkVb2VtX3ZpZGVvX3Jlc291cmNlX2lkEDM0MDYwNzE2OTI5NTYzNDkcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZA80NzYzNjI1NDUwNjQwNTgOdnRzX3JlcXVlc3RfaWQAJQIcACXEARsHiAFzBDI5NTMCY2QKMjAyMi0wNi0wNwNyY2IFOTkyMDADYXBwFEZhY2Vib29rIGZvciBBbmRyb2lkAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwY0MDAuNzICdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=9-4&oh=00_AfCCr0bLMdw-hVXqO6aBxFuDYbHWsaY8PimeBtOF2w-nJA&oe=66293CA5&_nc_sid=1d576d&_nc_rid=308335548834445&_nc_store_type=1&dl=1'
}
```

#### tiktokDown:
```output
{
  author: '𝗣𝗿𝗶𝗻𝗰𝗲𝘀𝘀 𝗲𝗹𝘀𝗮💗🖇️',
  title: '🤭🤭 #princess_elsa #princess_elsa01 #trending #viral #2million #dn💙🧸✨ #elsa🙈🍄 #funny @SĦɆNƗ ɃȺɃȺ★🤍࿓🕊️',
  avatar: 'https://tikcdn.io/tiktokdownload/a/aHR0cHM6Ly9wMTYtc2lnbi1zZy50aWt0b2tjZG4uY29tL2F3ZW1lLzEwMHgxMDAvdG9zLWFsaXNnLWF2dC0wMDY4L2I4ZWViYzlmYjk4ODJhM2UzODRmMjM4ODYzMTQxYTQ4LndlYnA/bGszcz00NTEyNjIxNyZub25jZT05NTI2MSZyZWZyZXNoX3Rva2VuPWRmNTU0OTJiMmFlMmI4MDQwYTZiYWZhZmJhNDk0YzE2JngtZXhwaXJlcz0xNzEzOTQ1NjAwJngtc2lnbmF0dXJlPW9kVlVFWU9VdlVYWkZ6TDFvRk9CcmRXeG95ayUzRA==',
  video: 'https://tikcdn.io/tiktokdownload/7353492524763286791',
  audio: 'https://tikcdn.io/tiktokdownload/aHR0cHM6Ly9zZjE2LWllcy1tdXNpYy1zZy50aWt0b2tjZG4uY29tL29iai90aWt0b2stb2JqLzczMTgzOTU1MjgzODY5Mzk2NTAubXAz'
}
```

Thank you for using softie-api.
