export default function dateProcess(date) {
    return {
      date2String() {
        // Create the formatted date string "YYYY-MM-DD"
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        // console.log(formattedDate);
        return formattedDate;
      },
      tomorrow() {
        const tomorrow = new Date(date);
        tomorrow.setDate(date.getDate() + 1);
        return tomorrow;
      },
      yesterday() {
        const yesterday = new Date(date);
        yesterday.setDate(date.getDate() - 1);
        return yesterday;
      }
    };
  }