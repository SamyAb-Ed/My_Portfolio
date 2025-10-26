# 🚀 Hostinger Deployment Guide for Samuel Worku Portfolio

## 📋 Prerequisites

- Hostinger hosting account
- Domain name (if not using subdomain)
- FTP/SFTP client (FileZilla, WinSCP, or Hostinger File Manager)

## 📁 Files Ready for Upload

Your portfolio is now built and ready for deployment. The following files are in the `dist/` folder:

### Core Files:

- `index.html` - Main HTML file
- `assets/` - All CSS, JS, and image files
- `.htaccess` - Apache configuration for SPA routing

## 🔧 Step-by-Step Deployment

### Method 1: Using Hostinger File Manager (Recommended)

1. **Login to Hostinger Control Panel**

   - Go to [hpanel.hostinger.com](https://hpanel.hostinger.com)
   - Login with your credentials

2. **Access File Manager**

   - Click on "File Manager" in the control panel
   - Navigate to `public_html` folder (this is your website root)

3. **Clear Existing Files (if any)**

   - Delete all existing files in `public_html`
   - This ensures a clean deployment

4. **Upload Portfolio Files**

   - Upload ALL contents from the `dist/` folder
   - Make sure to upload:
     - `index.html`
     - `assets/` folder (with all subfolders)
     - `.htaccess` file

5. **Set Permissions**
   - Right-click on `.htaccess` → Properties
   - Set permissions to `644`

### Method 2: Using FTP Client

1. **Get FTP Credentials**

   - In Hostinger control panel, go to "FTP Accounts"
   - Note down: Host, Username, Password, Port

2. **Connect via FTP**

   - Use FileZilla or similar FTP client
   - Connect to your Hostinger server

3. **Upload Files**
   - Navigate to `public_html` folder
   - Upload all contents from `dist/` folder

## ⚙️ Configuration Settings

### Domain Configuration

- **Primary Domain**: Your main domain (e.g., `samuelworku.com`)
- **Subdomain**: If using subdomain (e.g., `portfolio.yourdomain.com`)

### SSL Certificate

- Enable SSL certificate in Hostinger control panel
- Your site will be accessible via HTTPS

## 🔍 Post-Deployment Checklist

### ✅ Test Your Website

1. **Homepage**: Visit your domain to see the portfolio
2. **Navigation**: Test all navigation links
3. **Projects**: Verify project links work correctly
4. **Contact Form**: Test contact form functionality
5. **Mobile**: Check mobile responsiveness

### ✅ Performance Optimization

- **Page Speed**: Test with Google PageSpeed Insights
- **Mobile Friendly**: Test with Google Mobile-Friendly Test
- **SEO**: Check meta tags and descriptions

## 🛠️ Troubleshooting

### Common Issues:

1. **404 Errors on Refresh**

   - Ensure `.htaccess` file is uploaded correctly
   - Check file permissions (should be 644)

2. **Images Not Loading**

   - Verify all files in `assets/` folder are uploaded
   - Check file paths are correct

3. **CSS/JS Not Loading**

   - Clear browser cache
   - Check browser console for errors

4. **Slow Loading**
   - Enable Gzip compression (already in .htaccess)
   - Optimize images if needed

## 📊 Performance Features Included

Your portfolio includes these optimizations:

- ✅ **Gzip Compression**: Reduces file sizes
- ✅ **Browser Caching**: Faster repeat visits
- ✅ **Security Headers**: Protection against common attacks
- ✅ **SPA Routing**: Proper handling of React Router
- ✅ **Error Handling**: Custom 404 page

## 🔄 Updating Your Portfolio

To update your portfolio:

1. **Make Changes**: Edit your React code
2. **Build Again**: Run `npm run build`
3. **Upload**: Replace files in `public_html`
4. **Test**: Verify changes work correctly

## 📞 Support

If you encounter issues:

- Check Hostinger documentation
- Contact Hostinger support
- Review browser console for errors

## 🎉 Success!

Once deployed, your portfolio will be live at your domain and accessible worldwide!

---

**Built with ❤️ using React, Vite, and modern web technologies**
