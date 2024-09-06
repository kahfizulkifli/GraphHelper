const text = `
HloModule SyncTensorsGraph.223, input_output_alias={ {0}: (14, {}, must-alias), {1}: (15, {}, must-alias), {2}: (7, {}, must-alias), {3}: (6, {}, must-alias) }

%AddComputation.31 (x.32: bf16[], y.33: bf16[]) -> bf16[] {
  %x.32 = bf16[] parameter(0)
  %y.33 = bf16[] parameter(1)
  ROOT %add.34 = bf16[] add(bf16[] %x.32, bf16[] %y.33)
}

%AddComputation.46 (x.47: bf16[], y.48: bf16[]) -> bf16[] {
  %x.47 = bf16[] parameter(0)
  %y.48 = bf16[] parameter(1)
  ROOT %add.49 = bf16[] add(bf16[] %x.47, bf16[] %y.48)
}

%AddComputation.59 (x.60: bf16[], y.61: bf16[]) -> bf16[] {
  %x.60 = bf16[] parameter(0)
  %y.61 = bf16[] parameter(1)
  ROOT %add.62 = bf16[] add(bf16[] %x.60, bf16[] %y.61)
}

%AddComputation.78 (x.79: bf16[], y.80: bf16[]) -> bf16[] {
  %x.79 = bf16[] parameter(0)
  %y.80 = bf16[] parameter(1)
  ROOT %add.81 = bf16[] add(bf16[] %x.79, bf16[] %y.80)
}

ENTRY %SyncTensorsGraph.223 (p0.1: f32[], p1.3: bf16[], p2.5: bf16[], p3.6: f32[], p4.12: bf16[], p5.17: f32[], p6.19: bf16[4,4], p7.23: bf16[4], p8.67: bf16[1], p9.106: bf16[], p10.124: bf16[], p11.130: bf16[], p12.144: bf16[], p13.145: bf16[], p14.146: bf16[4,4], p15.210: bf16[4]) -> (bf16[4,4], bf16[4], bf16[4], bf16[4,4], bf16[1], /*index=5*/bf16[4,4], bf16[4,4], bf16[4], bf16[4]) {
  %p14.146 = bf16[4,4]{1,0} parameter(14), frontend_attributes={neff_input_names="input14"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p13.145 = bf16[] parameter(13), frontend_attributes={neff_input_names="input13"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %broadcast.147 = bf16[4,4]{1,0} broadcast(bf16[] %p13.145), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %multiply.148 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %p14.146, bf16[4,4]{1,0} %broadcast.147), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %p12.144 = bf16[] parameter(12), frontend_attributes={neff_input_names="input12"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %broadcast.149 = bf16[4,4]{1,0} broadcast(bf16[] %p12.144), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %multiply.151 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %multiply.148, bf16[4,4]{1,0} %broadcast.149), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %subtract.152 = bf16[4,4]{1,0} subtract(bf16[4,4]{1,0} %p14.146, bf16[4,4]{1,0} %multiply.151), metadata={op_type="aten__sub" op_name="aten__sub" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %constant.1 = bf16[] constant(0)
  %p11.130 = bf16[] parameter(11), frontend_attributes={neff_input_names="input11"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %multiply.2 = bf16[] multiply(bf16[] %constant.1, bf16[] %p11.130), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %broadcast.2 = bf16[4,4]{1,0} broadcast(bf16[] %multiply.2), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/adamw.py" source_line=121}
  %p7.23 = bf16[4]{0} parameter(7), frontend_attributes={neff_input_names="input7"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=220}
  %p6.19 = bf16[4,4]{1,0} parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=220}
  %p5.17 = f32[] parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %convert.26 = bf16[] convert(f32[] %p5.17), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %all-reduce.35 = (bf16[4]{0}, bf16[4,4]{1,0}, bf16[]) all-reduce(bf16[4]{0} %p7.23, bf16[4,4]{1,0} %p6.19, bf16[] %convert.26), replica_groups={{0},{1}}, constrain_layout=true, to_apply=%AddComputation.31, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.37 = bf16[4,4]{1,0} get-tuple-element((bf16[4]{0}, bf16[4,4]{1,0}, bf16[]) %all-reduce.35), index=1, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %constant.3 = bf16[1]{0} constant({1})
  %p8.67 = bf16[1]{0} parameter(8), frontend_attributes={neff_input_names="input8"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=113}
  %multiply.56 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %get-tuple-element.37, bf16[4,4]{1,0} %get-tuple-element.37), metadata={op_type="aten__mul" op_name="aten__norm.1/aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %constant.57 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__norm.1/aten__sum" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %reduce.63 = bf16[] reduce(bf16[4,4]{1,0} %multiply.56, bf16[] %constant.57), dimensions={0,1}, to_apply=%AddComputation.59, metadata={op_type="aten__sum" op_name="aten__norm.1/aten__sum" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %sqrt.64 = bf16[] sqrt(bf16[] %reduce.63), metadata={op_type="aten__sqrt" op_name="aten__norm.1/aten__sqrt" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %multiply.66 = bf16[] multiply(bf16[] %sqrt.64, bf16[] %sqrt.64), metadata={op_type="aten__pow" op_name="aten__pow" source_file="/home/ubuntu/kahfi/pytorch/torch/_tensor.py" source_line=40}
  %reshape = bf16[1]{0} reshape(bf16[] %multiply.66), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=128}
  %add.69 = bf16[1]{0} add(bf16[1]{0} %p8.67, bf16[1]{0} %reshape), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=128}
  %get-tuple-element.36 = bf16[4]{0} get-tuple-element((bf16[4]{0}, bf16[4,4]{1,0}, bf16[]) %all-reduce.35), index=0, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.43 = bf16[4]{0} multiply(bf16[4]{0} %get-tuple-element.36, bf16[4]{0} %get-tuple-element.36), metadata={op_type="aten__mul" op_name="aten__norm.2/aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %constant.44 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__norm.2/aten__sum" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %reduce.50 = bf16[] reduce(bf16[4]{0} %multiply.43, bf16[] %constant.44), dimensions={0}, to_apply=%AddComputation.46, metadata={op_type="aten__sum" op_name="aten__norm.2/aten__sum" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %sqrt.51 = bf16[] sqrt(bf16[] %reduce.50), metadata={op_type="aten__sqrt" op_name="aten__norm.2/aten__sqrt" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %multiply.53 = bf16[] multiply(bf16[] %sqrt.51, bf16[] %sqrt.51), metadata={op_type="aten__pow" op_name="aten__pow" source_file="/home/ubuntu/kahfi/pytorch/torch/_tensor.py" source_line=40}
  %reshape.1 = bf16[1]{0} reshape(bf16[] %multiply.53), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=128}
  %add.71 = bf16[1]{0} add(bf16[1]{0} %add.69, bf16[1]{0} %reshape.1), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=128}
  %get-tuple-element.77 = bf16[] get-tuple-element((bf16[4]{0}, bf16[4,4]{1,0}, bf16[]) %all-reduce.35), index=2, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %all-reduce.82 = (bf16[1]{0}, bf16[]) all-reduce(bf16[1]{0} %add.71, bf16[] %get-tuple-element.77), replica_groups={{0,1}}, to_apply=%AddComputation.78, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.83 = bf16[1]{0} get-tuple-element((bf16[1]{0}, bf16[]) %all-reduce.82), index=0, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %constant.4 = bf16[1]{0} constant({0.5})
  %power.86 = bf16[1]{0} power(bf16[1]{0} %get-tuple-element.83, bf16[1]{0} %constant.4), metadata={op_type="aten__pow" op_name="aten__pow" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=136}
  %p4.12 = bf16[] parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=187}
  %reshape.10 = bf16[1]{0} reshape(bf16[] %p4.12), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=187}
  %add.88 = bf16[1]{0} add(bf16[1]{0} %power.86, bf16[1]{0} %reshape.10), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=187}
  %divide.91 = bf16[1]{0} divide(bf16[1]{0} %constant.3, bf16[1]{0} %add.88), metadata={op_type="aten__reciprocal" op_name="aten__reciprocal" source_file="/home/ubuntu/kahfi/pytorch/torch/_tensor.py" source_line=913}
  %constant.8 = bf16[1]{0} constant({1})
  %compare.98 = pred[1]{0} compare(bf16[1]{0} %divide.91, bf16[1]{0} %constant.8), direction=LT, metadata={op_type="aten__lt" op_name="aten__lt" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %constant.9 = bf16[1]{0} constant({1})
  %select.100 = bf16[1]{0} select(pred[1]{0} %compare.98, bf16[1]{0} %divide.91, bf16[1]{0} %constant.9), metadata={op_type="aten__where" op_name="aten__where" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %reshape.102 = bf16[] reshape(bf16[1]{0} %select.100), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %broadcast.104 = bf16[4,4]{1,0} broadcast(bf16[] %reshape.102), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %multiply.105 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %get-tuple-element.37, bf16[4,4]{1,0} %broadcast.104), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %p10.124 = bf16[] parameter(10), frontend_attributes={neff_input_names="input10"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %broadcast.128 = bf16[4,4]{1,0} broadcast(bf16[] %p10.124), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %multiply.129 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %multiply.105, bf16[4,4]{1,0} %broadcast.128), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %add.138 = bf16[4,4]{1,0} add(bf16[4,4]{1,0} %broadcast.2, bf16[4,4]{1,0} %multiply.129), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %constant.12 = bf16[] constant(0)
  %p9.106 = bf16[] parameter(9), frontend_attributes={neff_input_names="input9"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %multiply.3 = bf16[] multiply(bf16[] %constant.12, bf16[] %p9.106), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %broadcast.6 = bf16[4,4]{1,0} broadcast(bf16[] %multiply.3), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/adamw.py" source_line=125}
  %multiply.115 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %multiply.105, bf16[4,4]{1,0} %multiply.105), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %p3.6 = f32[] parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %convert.114 = bf16[] convert(f32[] %p3.6), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %broadcast.116 = bf16[4,4]{1,0} broadcast(bf16[] %convert.114), dimensions={}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %multiply.117 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %multiply.115, bf16[4,4]{1,0} %broadcast.116), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %add.118 = bf16[4,4]{1,0} add(bf16[4,4]{1,0} %broadcast.6, bf16[4,4]{1,0} %multiply.117), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %sqrt.119 = bf16[4,4]{1,0} sqrt(bf16[4,4]{1,0} %add.118), metadata={op_type="aten__sqrt" op_name="aten__sqrt" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %p2.5 = bf16[] parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %broadcast.120 = bf16[4,4]{1,0} broadcast(bf16[] %p2.5), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %divide.121 = bf16[4,4]{1,0} divide(bf16[4,4]{1,0} %sqrt.119, bf16[4,4]{1,0} %broadcast.120), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %p1.3 = bf16[] parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %broadcast.122 = bf16[4,4]{1,0} broadcast(bf16[] %p1.3), dimensions={}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %add.123 = bf16[4,4]{1,0} add(bf16[4,4]{1,0} %divide.121, bf16[4,4]{1,0} %broadcast.122), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %divide.154 = bf16[4,4]{1,0} divide(bf16[4,4]{1,0} %add.138, bf16[4,4]{1,0} %add.123), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %p0.1 = f32[] parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %convert.153 = bf16[] convert(f32[] %p0.1), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %broadcast.155 = bf16[4,4]{1,0} broadcast(bf16[] %convert.153), dimensions={}, metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %multiply.156 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %divide.154, bf16[4,4]{1,0} %broadcast.155), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %add.157 = bf16[4,4]{1,0} add(bf16[4,4]{1,0} %subtract.152, bf16[4,4]{1,0} %multiply.156), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %p15.210 = bf16[4]{0} parameter(15), frontend_attributes={neff_input_names="input15"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.211 = bf16[4]{0} broadcast(bf16[] %p13.145), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %multiply.212 = bf16[4]{0} multiply(bf16[4]{0} %p15.210, bf16[4]{0} %broadcast.211), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %constant.15 = bf16[] constant(0)
  %broadcast.7 = bf16[4]{0} broadcast(bf16[] %constant.15), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %multiply.215 = bf16[4]{0} multiply(bf16[4]{0} %multiply.212, bf16[4]{0} %broadcast.7), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %subtract.216 = bf16[4]{0} subtract(bf16[4]{0} %p15.210, bf16[4]{0} %multiply.215), metadata={op_type="aten__sub" op_name="aten__sub" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %constant.16 = bf16[] constant(0)
  %multiply.7 = bf16[] multiply(bf16[] %constant.16, bf16[] %p11.130), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %broadcast.11 = bf16[4]{0} broadcast(bf16[] %multiply.7), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/adamw.py" source_line=121}
  %constant.19 = bf16[1]{0} constant({1})
  %compare.167 = pred[1]{0} compare(bf16[1]{0} %divide.91, bf16[1]{0} %constant.19), direction=LT, metadata={op_type="aten__lt" op_name="aten__lt" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %constant.20 = bf16[1]{0} constant({1})
  %select.169 = bf16[1]{0} select(pred[1]{0} %compare.167, bf16[1]{0} %divide.91, bf16[1]{0} %constant.20), metadata={op_type="aten__where" op_name="aten__where" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %reshape.171 = bf16[] reshape(bf16[1]{0} %select.169), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %broadcast.172 = bf16[4]{0} broadcast(bf16[] %reshape.171), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %multiply.173 = bf16[4]{0} multiply(bf16[4]{0} %get-tuple-element.36, bf16[4]{0} %broadcast.172), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %broadcast.194 = bf16[4]{0} broadcast(bf16[] %p10.124), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %multiply.195 = bf16[4]{0} multiply(bf16[4]{0} %multiply.173, bf16[4]{0} %broadcast.194), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %add.203 = bf16[4]{0} add(bf16[4]{0} %broadcast.11, bf16[4]{0} %multiply.195), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %constant.21 = bf16[] constant(0)
  %multiply.8 = bf16[] multiply(bf16[] %constant.21, bf16[] %p9.106), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %broadcast.14 = bf16[4]{0} broadcast(bf16[] %multiply.8), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/adamw.py" source_line=125}
  %multiply.182 = bf16[4]{0} multiply(bf16[4]{0} %multiply.173, bf16[4]{0} %multiply.173), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %convert.181 = bf16[] convert(f32[] %p3.6), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %broadcast.183 = bf16[4]{0} broadcast(bf16[] %convert.181), dimensions={}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %multiply.184 = bf16[4]{0} multiply(bf16[4]{0} %multiply.182, bf16[4]{0} %broadcast.183), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %add.185 = bf16[4]{0} add(bf16[4]{0} %broadcast.14, bf16[4]{0} %multiply.184), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %sqrt.186 = bf16[4]{0} sqrt(bf16[4]{0} %add.185), metadata={op_type="aten__sqrt" op_name="aten__sqrt" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %broadcast.187 = bf16[4]{0} broadcast(bf16[] %p2.5), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %divide.188 = bf16[4]{0} divide(bf16[4]{0} %sqrt.186, bf16[4]{0} %broadcast.187), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %broadcast.189 = bf16[4]{0} broadcast(bf16[] %p1.3), dimensions={}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %add.190 = bf16[4]{0} add(bf16[4]{0} %divide.188, bf16[4]{0} %broadcast.189), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %divide.218 = bf16[4]{0} divide(bf16[4]{0} %add.203, bf16[4]{0} %add.190), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %convert.217 = bf16[] convert(f32[] %p0.1), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %broadcast.219 = bf16[4]{0} broadcast(bf16[] %convert.217), dimensions={}, metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %multiply.220 = bf16[4]{0} multiply(bf16[4]{0} %divide.218, bf16[4]{0} %broadcast.219), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %add.221 = bf16[4]{0} add(bf16[4]{0} %subtract.216, bf16[4]{0} %multiply.220), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  ROOT %tuple.222 = (bf16[4,4]{1,0}, bf16[4]{0}, bf16[4]{0}, bf16[4,4]{1,0}, bf16[1]{0}, /*index=5*/bf16[4,4]{1,0}, bf16[4,4]{1,0}, bf16[4]{0}, bf16[4]{0}) tuple(bf16[4,4]{1,0} %add.157, bf16[4]{0} %add.221, bf16[4]{0} %multiply.173, bf16[4,4]{1,0} %multiply.105, bf16[1]{0} %power.86, /*index=5*/bf16[4,4]{1,0} %add.138, bf16[4,4]{1,0} %add.118, bf16[4]{0} %add.203, bf16[4]{0} %add.185), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7,output8"}
}

`

export default text;
