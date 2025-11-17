/* Basic Reset & Urdu Font Setup */
body {
    font-family: 'Noto Nastaliq Urdu', Arial, sans-serif;
    margin: 0;
    padding: 0;
    direction: rtl; /* For Right-to-Left Urdu layout */
    text-align: right;
    background-color: #f8f8f8;
    color: #333;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
}

.section-padding {
    padding: 60px 0;
}

h1, h2, h3 {
    color: #8B0000; /* Dark Red, like the image banner */
    text-align: center;
    margin-bottom: 20px;
    font-weight: 700;
}

/* Header Styling */
header {
    background-color: #A52A2A; /* Brown/Maroon theme */
    color: white;
    text-align: center;
    padding: 50px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

header h1 {
    color: white;
    font-size: 2.5em;
}

header p {
    font-size: 1.2em;
    margin-top: 5px;
}

.whatsapp-btn {
    display: inline-block;
    background-color: #25D366; /* WhatsApp Green */
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 20px;
    font-weight: 700;
    transition: background-color 0.3s;
}

.whatsapp-btn:hover {
    background-color: #128C7E;
}

/* Products and Grid Layout */
.bg-light {
    background-color: #f4f4f4;
}

.grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.product-item {
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    text-align: center;
    font-weight: 700;
    color: #A52A2A;
    border-right: 5px solid #A52A2A; /* Highlight effect */
}

.note {
    text-align: center;
    margin-top: 30px;
    font-style: italic;
    color: #555;
}

/* Contact Info */
.contact-info {
    border: 1px solid #ddd;
    padding: 25px;
    border-radius: 8px;
    background-color: white;
    line-height: 2.0;
}

.contact-info h3 {
    text-align: right;
    border-bottom: 2px solid #A52A2A;
    padding-bottom: 10px;
    margin-bottom: 15px;
}

.contact-info a {
    color: #A52A2A;
    text-decoration: none;
    font-weight: 700;
}

.contact-info a:hover {
    text-decoration: underline;
}

/* Footer */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px 0;
    font-size: 0.9em;
}

/* Responsive adjustments */
@media (max-width: 600px) {
    header h1 {
        font-size: 2em;
    }
}


