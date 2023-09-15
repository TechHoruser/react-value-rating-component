# Aditional Info

## Status Options

The `ValueRating` component uses the following status options to determine the rating:

- `bad`: Indicates a 'bad' rating when the `value` is below the `endBad` threshold.
- `good`: Indicates a 'good' rating when the `value` is above the `startGood` threshold.
- `neutral`: Indicates a 'neutral' rating when the `value` falls between the `endBad` and `startGood` thresholds.
- `mid-neutral`: A transitional state used when the status changes from 'good' or 'bad' to 'neutral' or vice versa.
