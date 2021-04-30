/** Auto Logout Authenticated User */

function autoLogOut() {
    /** Construct events array */
    const events = [
        'load',
        'mousemove',
        'mousedown',
        'click',
        'scroll',
        'keypress'
    ];

    // let warnTimer;
    let logoutTimer;

    /** Warn authenticated user of auto logout */
    // const warn = () => alert('You will be logged out due to inactivity. Click ok to remain logged in');
    /** Clear local storage when user is logged out */
    const logout = () => {
        window.localStorage.clear();
        window.location.reload();
    };

    /** Declare timer method */
    const setTimer = () => {
        // warnTimer = setTimeout(warn, 1000);
        logoutTimer = setTimeout(logout, 600 * 1000);
    };

    /** Declare clear timer method */
    const clearTimer = () => {
        // if (warnTimer) clearTimeout(warnTimer);
        if (logoutTimer) clearTimeout(logoutTimer);
    };

    /** Declare reset timer method that will fire on each event */
    const resetTimer = () => {
        clearTimer();
        setTimer();
    };

    return (events.forEach((event) => window.addEventListener(event, resetTimer)))
};

export { autoLogOut };