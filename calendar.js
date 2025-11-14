// Set the current date, used to determine the displayed month
        let currentDate = new Date();
        const today = new Date();

        const monthYearDisplay = document.getElementById('month-year');
        const daysGrid = document.getElementById('days-grid');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        const monthNames = [
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
        ];

        /**
         * Renders the calendar grid for the month currently set in currentDate.
         */
        function renderCalendar() {
            // Clear previous grid
            daysGrid.innerHTML = '';

            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();

            // 1. Display Month and Year in Header
            monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

            // 2. Determine Month Parameters
            // The day of the week (0=Sunday, 1=Monday, ...) for the 1st of the month
            const firstDayOfMonth = new Date(year, month, 1).getDay();
            // The number of days in the current month
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            // 3. Render Empty Cells (Days from the previous month)
            // This fills the space before the 1st day of the month
            for (let i = 0; i < firstDayOfMonth; i++) {
                const emptyCell = document.createElement('div');
                emptyCell.className = 'day-cell empty other-month';
                daysGrid.appendChild(emptyCell);
            }

            // 4. Render Days of the Current Month
            for (let day = 1; day <= daysInMonth; day++) {
                const dayCell = document.createElement('div');
                dayCell.className = 'day-cell';
                dayCell.textContent = day;

                // Check if this day is today
                const isToday = day === today.getDate() && 
                                month === today.getMonth() && 
                                year === today.getFullYear();

                if (isToday) {
                    dayCell.classList.add('current-day');
                }

                daysGrid.appendChild(dayCell);
            }
        }

        // 5. Navigation Handlers
        prevBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });

        nextBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });

        // Initial render when the page loads
        renderCalendar();