import React, { useEffect } from 'react';

const CalendlyWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="calendly-inline-widget" data-url="https://calendly.com/sprints_dev/initial_call?hide_event_type_details=1&hide_gdpr_banner=1&text_color=263254&primary_color=2F59D0" style={{
            width: '100%', height: '110%', alignSelf: 'center'
        }}></div >
    );
};

export default CalendlyWidget;
