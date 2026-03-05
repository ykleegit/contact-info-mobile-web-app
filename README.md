# Contact Info Mobile Web App

A responsive web application that displays contact information in a mobile-friendly table format. The app features offline functionality using localStorage and adapts its layout based on screen size.

## Features

- **Responsive Design**: Automatically adjusts layout for screens ≤600px width
- **Offline Support**: Uses localStorage to cache contact data for offline viewing
- **Online/Offline Detection**: Displays current connection status
- **Dynamic Data Loading**: Fetches contact information from JSON file
- **Mobile-Optimized Table**: Collapses table columns on small screens for better readability

## File Structure

```
contact-info-mobile-web-app/
├── index.html      # Main HTML structure
├── style.css       # Responsive styles and layout
├── app.js          # JavaScript logic for data handling
└── contacts.json   # Contact data in JSON format
```

## Technologies Used

- HTML5
- CSS3 (with media queries for responsive design)
- Vanilla JavaScript
- localStorage API
- XMLHttpRequest for data fetching

## How It Works

### Desktop View (width > 600px)
- Displays contacts in a traditional table format
- Shows Name, Address, and Mobile columns
- Font size: 2em for caption

### Mobile View (width ≤ 600px)
- Hides table headers
- Converts table rows to block layout
- Each cell displays its label before the data
- Font size: 1.5em for caption
- Alternating row colors for better readability

### Offline Functionality

1. **Online Mode**: 
   - Fetches contact data from `contacts.json`
   - Displays contacts in the table
   - Saves data to localStorage for offline access

2. **Offline Mode**:
   - Retrieves cached data from localStorage
   - Displays previously loaded contacts
   - Shows "Offline" status indicator

## Usage

### Local Testing

1. Clone this repository:
   ```bash
   git clone https://github.com/ykleegit/contact-info-mobile-web-app.git
   ```

2. Serve the files using a local web server (required for JSON fetching):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   ```

3. Open your browser and navigate to `http://localhost:8000`

### GitHub Pages Deployment

This app is deployed on GitHub Pages and can be accessed at:
```
https://ykleegit.github.io/contact-info-mobile-web-app/
```

## Contact Data Format

The `contacts.json` file follows this structure:

```json
{
  "contacts": [
    {
      "id": "c5657",
      "name": "Michael",
      "email": "michael@mail.com",
      "address": "Michael street",
      "gender": "Male",
      "phone": {
        "mobile": "63790563",
        "home": "26713565",
        "office": "25783564"
      }
    }
  ]
}
```

## Browser Compatibility

- Modern browsers with ES5+ support
- localStorage API support required
- XMLHttpRequest support required

## Testing

Test the application on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS Safari, Chrome Mobile)
- Different screen sizes to verify responsive behavior

## License

This project is created for educational purposes as part of COMP 3132SEF S313F Lab-06.

## Author

Created as part of a web development lab assignment.
