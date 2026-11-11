CUTTRACK DEVELOPMENT V6

This is a separate development build. Do not overwrite the live GitHub Pages files until the user has reviewed and approved it.

V6 refinements:
- Removed the run completion checkbox and run-distance controls from the Training screen. Runs are to be logged separately using Activity > Additional activity on the relevant calendar date.
- The Training screen retains the scheduled treadmill walk checkbox and per-date duration/speed fields.
- Ticking the scheduled treadmill walk now saves the actual duration and speed against that date and includes its estimated calories in the Training calorie figure, including on non-strength days.
- The Training calorie figure combines the completed strength-session estimate and scheduled treadmill walk estimate where applicable. It does not add a run.
- The Activity planned-programme panel no longer offers a run completion checkbox. A run remains part of the expected schedule where applicable, but must be entered as a separate Run activity.
- Weekly run completion counts runs logged as additional activities.

Previously retained V5 features:
- Programme dates and date-labelled training calendar.
- Retrospective training dates.
- Historical weigh-ins on the weight graph.
- Food diary categories and existing export/import functionality.
- Existing local storage key and Supabase configuration.

Important:
- This development build has not been verified against live Supabase or physical iPhone devices.
- Use JSON backup before testing with valuable records.
- Do not upload to the live GitHub Pages site until reviewed and approved.


FINAL FOOD DIARY REFINEMENT (V7)
- Added visible column headings to every populated meal category: Food / drink, Quantity, Calories (kcal), Category and Status.
- The calorie input has an explicit accessible label, numeric kcal input, and kcal placeholder.
- Responsive column headings are included for mobile layouts.
- Service worker cache version incremented to cuttrack-v7 so browsers request the updated app shell.

Deployment note: this is a prepared replacement package, not a live deployment. Back up the current Cuttrack data before replacing files. Preserve the existing Supabase project and configuration.
