const text = `
HloModule SyncTensorsGraph.38, input_output_alias={ {0}: (0, {}, must-alias), {1}: (1, {}, must-alias), {2}: (2, {}, must-alias), {3}: (3, {}, must-alias), {4}: (4, {}, must-alias), {5}: (5, {}, must-alias), {6}: (6, {}, must-alias), {7}: (7, {}, must-alias), {8}: (8, {}, must-alias), {9}: (9, {}, must-alias), {10}: (10, {}, must-alias), {11}: (11, {}, must-alias), {12}: (12, {}, must-alias), {13}: (13, {}, must-alias), {14}: (14, {}, must-alias), {15}: (15, {}, must-alias), {16}: (16, {}, must-alias), {17}: (17, {}, must-alias), {18}: (18, {}, must-alias), {19}: (19, {}, must-alias), {20}: (20, {}, must-alias), {21}: (21, {}, must-alias), {22}: (22, {}, must-alias), {23}: (23, {}, must-alias), {24}: (24, {}, must-alias), {25}: (25, {}, must-alias), {26}: (26, {}, must-alias), {27}: (27, {}, must-alias), {28}: (28, {}, must-alias), {29}: (29, {}, must-alias), {30}: (30, {}, must-alias), {31}: (31, {}, must-alias), {32}: (32, {}, must-alias) }

ENTRY %SyncTensorsGraph.38 (p0.1: bf16[30522,16], p1.2: bf16[512,16], p2.3: bf16[2,16], p3.4: bf16[16], p4.5: bf16[16], p5.6: s64[1,512], p6.7: s64[1,512], p7.8: bf16[16,16], p8.9: bf16[16], p9.10: bf16[16,16], p10.11: bf16[16], p11.12: bf16[16,16], p12.13: bf16[16], p13.14: bf16[16,16], p14.15: bf16[16], p15.16: bf16[16], p16.17: bf16[16], p17.18: bf16[4096,16], p18.19: bf16[4096], p19.20: bf16[16,4096], p20.21: bf16[16], p21.22: bf16[16], p22.23: bf16[16], p23.24: bf16[16,16], p24.25: bf16[16], p25.26: bf16[16,16], p26.27: bf16[16], p27.28: bf16[16], p28.29: bf16[16], p29.30: bf16[30522], p30.31: bf16[2,16], p31.32: bf16[2], p32.33: f32[1]) -> (bf16[30522,16], bf16[512,16], bf16[2,16], bf16[16], bf16[16], /*index=5*/s64[1,512], s64[1,512], bf16[16,16], bf16[16], bf16[16,16], /*index=10*/bf16[16], bf16[16,16], bf16[16], bf16[16,16], bf16[16], /*index=15*/bf16[16], bf16[16], bf16[4096,16], bf16[4096], bf16[16,4096], /*index=20*/bf16[16], bf16[16], bf16[16], bf16[16,16], bf16[16], /*index=25*/bf16[16,16], bf16[16], bf16[16], bf16[16], bf16[30522], /*index=30*/bf16[2,16], bf16[2], f32[1], bf16[1]) {
  %p0.1 = bf16[30522,16]{1,0} parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p1.2 = bf16[512,16]{1,0} parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p2.3 = bf16[2,16]{1,0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p3.4 = bf16[16]{0} parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p4.5 = bf16[16]{0} parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p5.6 = s64[1,512]{1,0} parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p6.7 = s64[1,512]{1,0} parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p7.8 = bf16[16,16]{1,0} parameter(7), frontend_attributes={neff_input_names="input7"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p8.9 = bf16[16]{0} parameter(8), frontend_attributes={neff_input_names="input8"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p9.10 = bf16[16,16]{1,0} parameter(9), frontend_attributes={neff_input_names="input9"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p10.11 = bf16[16]{0} parameter(10), frontend_attributes={neff_input_names="input10"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p11.12 = bf16[16,16]{1,0} parameter(11), frontend_attributes={neff_input_names="input11"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p12.13 = bf16[16]{0} parameter(12), frontend_attributes={neff_input_names="input12"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p13.14 = bf16[16,16]{1,0} parameter(13), frontend_attributes={neff_input_names="input13"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p14.15 = bf16[16]{0} parameter(14), frontend_attributes={neff_input_names="input14"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p15.16 = bf16[16]{0} parameter(15), frontend_attributes={neff_input_names="input15"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p16.17 = bf16[16]{0} parameter(16), frontend_attributes={neff_input_names="input16"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p17.18 = bf16[4096,16]{1,0} parameter(17), frontend_attributes={neff_input_names="input17"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p18.19 = bf16[4096]{0} parameter(18), frontend_attributes={neff_input_names="input18"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p19.20 = bf16[16,4096]{1,0} parameter(19), frontend_attributes={neff_input_names="input19"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p20.21 = bf16[16]{0} parameter(20), frontend_attributes={neff_input_names="input20"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p21.22 = bf16[16]{0} parameter(21), frontend_attributes={neff_input_names="input21"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p22.23 = bf16[16]{0} parameter(22), frontend_attributes={neff_input_names="input22"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p23.24 = bf16[16,16]{1,0} parameter(23), frontend_attributes={neff_input_names="input23"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p24.25 = bf16[16]{0} parameter(24), frontend_attributes={neff_input_names="input24"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p25.26 = bf16[16,16]{1,0} parameter(25), frontend_attributes={neff_input_names="input25"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p26.27 = bf16[16]{0} parameter(26), frontend_attributes={neff_input_names="input26"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p27.28 = bf16[16]{0} parameter(27), frontend_attributes={neff_input_names="input27"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p28.29 = bf16[16]{0} parameter(28), frontend_attributes={neff_input_names="input28"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p29.30 = bf16[30522]{0} parameter(29), frontend_attributes={neff_input_names="input29"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p30.31 = bf16[2,16]{1,0} parameter(30), frontend_attributes={neff_input_names="input30"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p31.32 = bf16[2]{0} parameter(31), frontend_attributes={neff_input_names="input31"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p32.33 = f32[1]{0} parameter(32), frontend_attributes={neff_input_names="input32"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="dp_bert_large_hf_pretrain_hdf5.py" source_line=277}
  %constant = bf16[1]{0} constant({0})
  ROOT %tuple.37 = (bf16[30522,16]{1,0}, bf16[512,16]{1,0}, bf16[2,16]{1,0}, bf16[16]{0}, bf16[16]{0}, /*index=5*/s64[1,512]{1,0}, s64[1,512]{1,0}, bf16[16,16]{1,0}, bf16[16]{0}, bf16[16,16]{1,0}, /*index=10*/bf16[16]{0}, bf16[16,16]{1,0}, bf16[16]{0}, bf16[16,16]{1,0}, bf16[16]{0}, /*index=15*/bf16[16]{0}, bf16[16]{0}, bf16[4096,16]{1,0}, bf16[4096]{0}, bf16[16,4096]{1,0}, /*index=20*/bf16[16]{0}, bf16[16]{0}, bf16[16]{0}, bf16[16,16]{1,0}, bf16[16]{0}, /*index=25*/bf16[16,16]{1,0}, bf16[16]{0}, bf16[16]{0}, bf16[16]{0}, bf16[30522]{0}, /*index=30*/bf16[2,16]{1,0}, bf16[2]{0}, f32[1]{0}, bf16[1]{0}) tuple(bf16[30522,16]{1,0} %p0.1, bf16[512,16]{1,0} %p1.2, bf16[2,16]{1,0} %p2.3, bf16[16]{0} %p3.4, bf16[16]{0} %p4.5, /*index=5*/s64[1,512]{1,0} %p5.6, s64[1,512]{1,0} %p6.7, bf16[16,16]{1,0} %p7.8, bf16[16]{0} %p8.9, bf16[16,16]{1,0} %p9.10, /*index=10*/bf16[16]{0} %p10.11, bf16[16,16]{1,0} %p11.12, bf16[16]{0} %p12.13, bf16[16,16]{1,0} %p13.14, bf16[16]{0} %p14.15, /*index=15*/bf16[16]{0} %p15.16, bf16[16]{0} %p16.17, bf16[4096,16]{1,0} %p17.18, bf16[4096]{0} %p18.19, bf16[16,4096]{1,0} %p19.20, /*index=20*/bf16[16]{0} %p20.21, bf16[16]{0} %p21.22, bf16[16]{0} %p22.23, bf16[16,16]{1,0} %p23.24, bf16[16]{0} %p24.25, /*index=25*/bf16[16,16]{1,0} %p25.26, bf16[16]{0} %p26.27, bf16[16]{0} %p27.28, bf16[16]{0} %p28.29, bf16[30522]{0} %p29.30, /*index=30*/bf16[2,16]{1,0} %p30.31, bf16[2]{0} %p31.32, f32[1]{0} %p32.33, bf16[1]{0} %constant), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7,output8,output9,output10,output11,output12,output13,output14,output15,output16,output17,output18,output19,output20,output21,output22,output23,output24,output25,output26,output27,output28,output29,output30,output31,output32,output33"}
}


`

export default text;
