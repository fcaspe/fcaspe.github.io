#!/bin/bash
GENERATE_CMD="/Users/franco/aim/projs/BRAVE/BraveCpp/build/BraveCpp/apps/bravecpp_generate"

for model in animals_std animals_constrained animals_tonal dice_percussive dice_constrained dice_std music_constrained music_std; do
    $GENERATE_CMD Iris3 ../ziyi_models/$model.h5 ./original ./$model
done