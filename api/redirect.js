import fetch from 'node-fetch';

export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const API_KEY = 'c8f56ce8ba9379'; // Your IPinfo.io API key

  try {
    const response = await fetch(`https://ipinfo.io/${ip}?token=${API_KEY}`);
    const data = await response.json();
    const country = data.country;

    if (country === 'US') {
      res.redirect('https://www.zyvorah.com'); // Redirect to main page for US
    } else if (country === 'IN') {
      res.redirect('https://www.zyvorah.com'); // Redirect to main page for IN
    } else {
      res.redirect('https://www.zyvorah.com'); // Redirect to main page for others
    }
  } catch (error) {
    console.error('Error fetching IP info:', error);
    res.redirect('https://www.zyvorah.com');
  }
}
