// Authentication utilities for handling user authentication and session management
const authUtils = {
    /**
     * Check if user is currently logged in
     * @returns {Object} Object containing login status and user data
     */
    checkAuth() {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            return {
                isLoggedIn: !!user,
                user: user
            };
        } catch (error) {
            console.error('Auth check error:', error);
            localStorage.removeItem('user');
            return { isLoggedIn: false, user: null };
        }
    },

    /**
     * Handle user login
     * @param {string} email - User's email address
     * @param {string} password - User's password
     * @returns {Promise<Object>} Login result with success status and user data
     */
    async login(email, password) {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            if (data.success) {
                // Ensure consistent property names for user data
                const userData = {
                    fullname: data.user.name || data.user.fullname,
                    email: data.user.email,
                    created_at: data.user.created_at
                };
                localStorage.setItem('user', JSON.stringify(userData));
                this.updateNavigation();
                return { success: true, user: userData };
            } else {
                return { success: false, error: data.error || 'Invalid credentials' };
            }
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: 'An error occurred during login' };
        }
    },

    /**
     * Handle user registration
     * @param {string} name - User's full name
     * @param {string} email - User's email address
     * @param {string} password - User's password
     * @returns {Promise<Object>} Registration result with success status
     */
    async signup(name, email, password) {
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    fullname: name, // Ensure consistent property name
                    email, 
                    password 
                })
            });

            const data = await response.json();
            if (data.success) {
                return { success: true };
            } else {
                return { success: false, error: data.error || 'Registration failed' };
            }
        } catch (error) {
            console.error('Signup error:', error);
            return { success: false, error: 'An error occurred during signup' };
        }
    },

    /**
     * Handle user logout
     * Clears user data and redirects to login page
     */
    logout() {
        try {
            localStorage.removeItem('user');
            this.updateNavigation();
            window.location.replace('/views/login.html');
        } catch (error) {
            console.error('Logout error:', error);
            window.location.replace('/views/login.html');
        }
    },

    /**
     * Update navigation menu based on authentication state
     * Shows/hides login and profile links accordingly
     */
    updateNavigation() {
        try {
            const { isLoggedIn } = this.checkAuth();
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) {
                const loginItem = navMenu.querySelector('a[href="/views/login.html"]')?.parentElement;
                const profileItem = navMenu.querySelector('a[href="/views/profile.html"]')?.parentElement;

                if (isLoggedIn) {
                    if (loginItem) loginItem.style.display = 'none';
                    if (!profileItem) {
                        const li = document.createElement('li');
                        li.innerHTML = '<a href="/views/profile.html">Profile</a>';
                        navMenu.appendChild(li);
                    }
                } else {
                    if (loginItem) loginItem.style.display = 'block';
                    if (profileItem) profileItem.remove();
                }
            }
        } catch (error) {
            console.error('Navigation update error:', error);
        }
    },

    /**
     * Handle profile updates
     * @param {Object} profileData - Updated profile information
     * @returns {Promise<Object>} Update result with success status
     */
    async updateProfile(profileData) {
        try {
            const response = await fetch('/api/profile/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullname: profileData.name, // Ensure consistent property name
                    email: profileData.email,
                    currentPassword: profileData.currentPassword,
                    newPassword: profileData.newPassword
                })
            });

            const data = await response.json();
            if (data.success) {
                const user = JSON.parse(localStorage.getItem('user'));
                Object.assign(user, {
                    fullname: profileData.name,
                    email: profileData.email
                });
                localStorage.setItem('user', JSON.stringify(user));
                return { success: true };
            } else {
                return { success: false, error: data.error || 'Profile update failed' };
            }
        } catch (error) {
            console.error('Profile update error:', error);
            return { success: false, error: 'An error occurred while updating profile' };
        }
    }
};

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', () => {
    authUtils.updateNavigation();
});

// Export functions for use in other files
window.authUtils = authUtils; 