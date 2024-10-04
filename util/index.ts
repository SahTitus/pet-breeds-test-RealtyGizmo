// Determine the appropriate API endpoint based on whether 'id' is numeric
// Dog IDs are numeric (integer), while Cat IDs are non-numeric (strings)
// The regular expression /^\d+$/ checks if 'id' consists solely of digits
export function isDogId(id: string | number): boolean {
	// Convert the id to a string if it's not already
	const idStr = id.toString();
  
	// Check if the id consists solely of digits (numeric)
	return /^\d+$/.test(idStr);
  }
  