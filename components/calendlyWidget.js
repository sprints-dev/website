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
        <div
            data-url="https://calendly.com/sprints_dev/initial_call?hide_event_type_details=1&hide_gdpr_banner=1"
            style={{ width: '100%', height: '80%' }}
        />
    );

    return (
        <>
            <div data-url="https://calendly.com/sprints_dev/initial_call?hide_event_type_details=1&hide_gdpr_banner=1"></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </>
    )
};

export default CalendlyWidget;
