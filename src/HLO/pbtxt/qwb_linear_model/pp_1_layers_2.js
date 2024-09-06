const text = `
HloModule SyncTensorsGraph.442, input_output_alias={ {0}: (9, {}, must-alias), {1}: (8, {}, must-alias), {2}: (7, {}, must-alias), {3}: (17, {}, must-alias), {4}: (10, {}, must-alias) }

%AddComputation.34 (x.35: bf16[], y.36: bf16[]) -> bf16[] {
  %x.35 = bf16[] parameter(0)
  %y.36 = bf16[] parameter(1)
  ROOT %add.37 = bf16[] add(bf16[] %x.35, bf16[] %y.36)
}

%AddComputation.77 (x.78: bf16[], y.79: bf16[]) -> bf16[] {
  %x.78 = bf16[] parameter(0)
  %y.79 = bf16[] parameter(1)
  ROOT %add.80 = bf16[] add(bf16[] %x.78, bf16[] %y.79)
}

%AddComputation.96 (x.97: bf16[], y.98: bf16[]) -> bf16[] {
  %x.97 = bf16[] parameter(0)
  %y.98 = bf16[] parameter(1)
  ROOT %add.99 = bf16[] add(bf16[] %x.97, bf16[] %y.98)
}

%AddComputation.146 (x.147: bf16[], y.148: bf16[]) -> bf16[] {
  %x.147 = bf16[] parameter(0)
  %y.148 = bf16[] parameter(1)
  ROOT %add.149 = bf16[] add(bf16[] %x.147, bf16[] %y.148)
}

%AddComputation.172 (x.173: bf16[], y.174: bf16[]) -> bf16[] {
  %x.173 = bf16[] parameter(0)
  %y.174 = bf16[] parameter(1)
  ROOT %add.175 = bf16[] add(bf16[] %x.173, bf16[] %y.174)
}

%scalar_add_computation (scalar_lhs: f32[], scalar_rhs: f32[]) -> f32[] {
  %scalar_lhs = f32[] parameter(0)
  %scalar_rhs = f32[] parameter(1)
  ROOT %add = f32[] add(f32[] %scalar_lhs, f32[] %scalar_rhs)
}

ENTRY %SyncTensorsGraph.442 (p0.1: f32[], p1.3: bf16[], p2.5: bf16[], p3.6: f32[], p4.12: bf16[], p5.21: bf16[], p6.22: bf16[], p7.64: bf16[1,4], p8.107: bf16[4], p9.115: bf16[4,4], p10.124: bf16[4,4], p11.180: bf16[1], p12.211: bf16[], p13.229: bf16[], p14.235: bf16[], p15.249: bf16[], p16.250: bf16[], p17.429: bf16[1]) -> (bf16[4,4], bf16[4], bf16[1,4], bf16[1], bf16[4,4], /*index=5*/bf16[1], bf16[1,4], bf16[4], bf16[4,4], bf16[1], /*index=10*/bf16[4,4], bf16[4,4], bf16[1,4], bf16[1,4], bf16[4], /*index=15*/bf16[4], bf16[1], bf16[1]) {
  %p9.115 = bf16[4,4]{1,0} parameter(9), frontend_attributes={neff_input_names="input9"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p16.250 = bf16[] parameter(16), frontend_attributes={neff_input_names="input16"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %broadcast.251 = bf16[4,4]{1,0} broadcast(bf16[] %p16.250), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %multiply.252 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %p9.115, bf16[4,4]{1,0} %broadcast.251), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %p15.249 = bf16[] parameter(15), frontend_attributes={neff_input_names="input15"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %broadcast.253 = bf16[4,4]{1,0} broadcast(bf16[] %p15.249), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %multiply.255 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %multiply.252, bf16[4,4]{1,0} %broadcast.253), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %subtract.256 = bf16[4,4]{1,0} subtract(bf16[4,4]{1,0} %p9.115, bf16[4,4]{1,0} %multiply.255), metadata={op_type="aten__sub" op_name="aten__sub" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %constant.1 = bf16[] constant(0)
  %p14.235 = bf16[] parameter(14), frontend_attributes={neff_input_names="input14"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %multiply.0 = bf16[] multiply(bf16[] %constant.1, bf16[] %p14.235), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %broadcast.2 = bf16[4,4]{1,0} broadcast(bf16[] %multiply.0), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/adamw.py" source_line=121}
  %p6.22 = bf16[] parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %p5.21 = bf16[] parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %divide.1 = bf16[] divide(bf16[] %p6.22, bf16[] %p5.21), metadata={op_type="aten__div" op_name="aten__div"}
  %broadcast.58 = bf16[1,4]{1,0} broadcast(bf16[] %divide.1), dimensions={}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %p7.64 = bf16[1,4]{1,0} parameter(7), frontend_attributes={neff_input_names="input7"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %custom-call.7 = bf16[1,4]{1,0} custom-call(bf16[1,4]{1,0} %p7.64), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.21 = bf16[1,4]{1,0} multiply(bf16[1,4]{1,0} %broadcast.58, bf16[1,4]{1,0} %custom-call.7), metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.148 = bf16[4]{0} reshape(bf16[1,4]{1,0} %multiply.21), metadata={op_type="aten__mm" op_name="aten__mm"}
  %broadcast.43 = bf16[4,4]{1,0} broadcast(bf16[4]{0} %reshape.148), dimensions={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %p10.124 = bf16[4,4]{1,0} parameter(10), frontend_attributes={neff_input_names="input10"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="run_simple_model_nxd.py" source_line=155}
  %transpose.157 = bf16[4,4]{0,1} transpose(bf16[4,4]{1,0} %p10.124), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.1 = bf16[4,4]{0,1} dot(bf16[4,4]{1,0} %broadcast.43, bf16[4,4]{0,1} %transpose.157), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.8 = bf16[4,4]{1,0} custom-call(bf16[4,4]{0,1} %dot.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.3 = bf16[1]{0} constant({1})
  %p11.180 = bf16[1]{0} parameter(11), frontend_attributes={neff_input_names="input11"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=113}
  %multiply.169 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %custom-call.8, bf16[4,4]{1,0} %custom-call.8), metadata={op_type="aten__mul" op_name="aten__norm.1/aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %constant.170 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__norm.1/aten__sum" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %reduce.176 = bf16[] reduce(bf16[4,4]{1,0} %multiply.169, bf16[] %constant.170), dimensions={0,1}, to_apply=%AddComputation.172, metadata={op_type="aten__sum" op_name="aten__norm.1/aten__sum" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %sqrt.177 = bf16[] sqrt(bf16[] %reduce.176), metadata={op_type="aten__sqrt" op_name="aten__norm.1/aten__sqrt" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %multiply.179 = bf16[] multiply(bf16[] %sqrt.177, bf16[] %sqrt.177), metadata={op_type="aten__pow" op_name="aten__pow" source_file="/home/ubuntu/kahfi/pytorch/torch/_tensor.py" source_line=40}
  %reshape.13 = bf16[1]{0} reshape(bf16[] %multiply.179), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=128}
  %add.182 = bf16[1]{0} add(bf16[1]{0} %p11.180, bf16[1]{0} %reshape.13), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=128}
  %custom-call.9 = bf16[4,4]{1,0} custom-call(bf16[4,4]{1,0} %p9.115), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.123 = bf16[4,4]{0,1} transpose(bf16[4,4]{1,0} %custom-call.9), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.125 = bf16[4,4]{1,0} dot(bf16[4,4]{1,0} %p10.124, bf16[4,4]{0,1} %transpose.123), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p8.107 = bf16[4]{0} parameter(8), frontend_attributes={neff_input_names="input8"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %custom-call.10 = bf16[4]{0} custom-call(bf16[4]{0} %p8.107), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.129 = bf16[4,4]{1,0} broadcast(bf16[4]{0} %custom-call.10), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.130 = bf16[4,4]{1,0} add(bf16[4,4]{1,0} %dot.125, bf16[4,4]{1,0} %broadcast.129), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %broadcast.60 = bf16[4,4]{1,0} broadcast(bf16[] %divide.1), dimensions={}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %multiply.22 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %add.130, bf16[4,4]{1,0} %broadcast.60)
  %convert.2 = f32[4,4]{1,0} convert(bf16[4,4]{1,0} %multiply.22)
  %constant = f32[] constant(0)
  %reduce = f32[4]{0} reduce(f32[4,4]{1,0} %convert.2, f32[] %constant), dimensions={0}, to_apply=%scalar_add_computation
  %convert.1 = bf16[4]{0} convert(f32[4]{0} %reduce), metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.22 = bf16[1,4]{0,1} reshape(bf16[4]{0} %convert.1), metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.11 = bf16[1,4]{1,0} custom-call(bf16[1,4]{0,1} %reshape.22), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.143 = bf16[1,4]{1,0} multiply(bf16[1,4]{1,0} %custom-call.11, bf16[1,4]{1,0} %custom-call.11), metadata={op_type="aten__mul" op_name="aten__norm.2/aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %constant.144 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__norm.2/aten__sum" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %reduce.150 = bf16[] reduce(bf16[1,4]{1,0} %multiply.143, bf16[] %constant.144), dimensions={0,1}, to_apply=%AddComputation.146, metadata={op_type="aten__sum" op_name="aten__norm.2/aten__sum" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %sqrt.151 = bf16[] sqrt(bf16[] %reduce.150), metadata={op_type="aten__sqrt" op_name="aten__norm.2/aten__sqrt" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %multiply.153 = bf16[] multiply(bf16[] %sqrt.151, bf16[] %sqrt.151), metadata={op_type="aten__pow" op_name="aten__pow" source_file="/home/ubuntu/kahfi/pytorch/torch/_tensor.py" source_line=40}
  %reshape.23 = bf16[1]{0} reshape(bf16[] %multiply.153), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=128}
  %add.184 = bf16[1]{0} add(bf16[1]{0} %add.182, bf16[1]{0} %reshape.23), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=128}
  %constant.75 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.81 = bf16[4]{0} reduce(bf16[4,4]{1,0} %broadcast.43, bf16[] %constant.75), dimensions={0}, to_apply=%AddComputation.77, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.12 = bf16[4]{0} custom-call(bf16[4]{0} %reduce.81), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.93 = bf16[4]{0} multiply(bf16[4]{0} %custom-call.12, bf16[4]{0} %custom-call.12), metadata={op_type="aten__mul" op_name="aten__norm.3/aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %constant.94 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__norm.3/aten__sum" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %reduce.100 = bf16[] reduce(bf16[4]{0} %multiply.93, bf16[] %constant.94), dimensions={0}, to_apply=%AddComputation.96, metadata={op_type="aten__sum" op_name="aten__norm.3/aten__sum" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %sqrt.101 = bf16[] sqrt(bf16[] %reduce.100), metadata={op_type="aten__sqrt" op_name="aten__norm.3/aten__sqrt" source_file="/home/ubuntu/kahfi/pytorch/torch/functional.py" source_line=1624}
  %multiply.103 = bf16[] multiply(bf16[] %sqrt.101, bf16[] %sqrt.101), metadata={op_type="aten__pow" op_name="aten__pow" source_file="/home/ubuntu/kahfi/pytorch/torch/_tensor.py" source_line=40}
  %reshape.29 = bf16[1]{0} reshape(bf16[] %multiply.103), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=128}
  %add.186 = bf16[1]{0} add(bf16[1]{0} %add.184, bf16[1]{0} %reshape.29), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=128}
  %broadcast.4 = bf16[4,1]{1,0} broadcast(bf16[] %divide.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %constant.32 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.38 = bf16[1]{0} reduce(bf16[4,1]{1,0} %broadcast.4, bf16[] %constant.32), dimensions={0}, to_apply=%AddComputation.34, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.13 = bf16[1]{0} custom-call(bf16[1]{0} %reduce.38), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.23 = bf16[1]{0} multiply(bf16[1]{0} %custom-call.13, bf16[1]{0} %custom-call.13), metadata={op_type="aten__pow" op_name="aten__pow" source_file="/home/ubuntu/kahfi/pytorch/torch/_tensor.py" source_line=40}
  %add.188 = bf16[1]{0} add(bf16[1]{0} %add.186, bf16[1]{0} %multiply.23), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=128}
  %constant.6 = bf16[1]{0} constant({0.5})
  %power.191 = bf16[1]{0} power(bf16[1]{0} %add.188, bf16[1]{0} %constant.6), metadata={op_type="aten__pow" op_name="aten__pow" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=136}
  %p4.12 = bf16[] parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=187}
  %reshape.36 = bf16[1]{0} reshape(bf16[] %p4.12), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=187}
  %add.193 = bf16[1]{0} add(bf16[1]{0} %power.191, bf16[1]{0} %reshape.36), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=187}
  %divide.196 = bf16[1]{0} divide(bf16[1]{0} %constant.3, bf16[1]{0} %add.193), metadata={op_type="aten__reciprocal" op_name="aten__reciprocal" source_file="/home/ubuntu/kahfi/pytorch/torch/_tensor.py" source_line=913}
  %constant.12 = bf16[1]{0} constant({1})
  %compare.203 = pred[1]{0} compare(bf16[1]{0} %divide.196, bf16[1]{0} %constant.12), direction=LT, metadata={op_type="aten__lt" op_name="aten__lt" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %constant.13 = bf16[1]{0} constant({1})
  %select.205 = bf16[1]{0} select(pred[1]{0} %compare.203, bf16[1]{0} %divide.196, bf16[1]{0} %constant.13), metadata={op_type="aten__where" op_name="aten__where" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %reshape.207 = bf16[] reshape(bf16[1]{0} %select.205), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %broadcast.209 = bf16[4,4]{1,0} broadcast(bf16[] %reshape.207), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %multiply.210 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %custom-call.8, bf16[4,4]{1,0} %broadcast.209), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %p13.229 = bf16[] parameter(13), frontend_attributes={neff_input_names="input13"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %broadcast.233 = bf16[4,4]{1,0} broadcast(bf16[] %p13.229), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %multiply.234 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %multiply.210, bf16[4,4]{1,0} %broadcast.233), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %add.243 = bf16[4,4]{1,0} add(bf16[4,4]{1,0} %broadcast.2, bf16[4,4]{1,0} %multiply.234), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %constant.15 = bf16[] constant(0)
  %p12.211 = bf16[] parameter(12), frontend_attributes={neff_input_names="input12"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %multiply.7 = bf16[] multiply(bf16[] %constant.15, bf16[] %p12.211), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %broadcast.14 = bf16[4,4]{1,0} broadcast(bf16[] %multiply.7), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/adamw.py" source_line=125}
  %multiply.220 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %multiply.210, bf16[4,4]{1,0} %multiply.210), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %p3.6 = f32[] parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %convert.219 = bf16[] convert(f32[] %p3.6), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %broadcast.221 = bf16[4,4]{1,0} broadcast(bf16[] %convert.219), dimensions={}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %multiply.222 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %multiply.220, bf16[4,4]{1,0} %broadcast.221), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %add.223 = bf16[4,4]{1,0} add(bf16[4,4]{1,0} %broadcast.14, bf16[4,4]{1,0} %multiply.222), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %sqrt.224 = bf16[4,4]{1,0} sqrt(bf16[4,4]{1,0} %add.223), metadata={op_type="aten__sqrt" op_name="aten__sqrt" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %p2.5 = bf16[] parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %broadcast.225 = bf16[4,4]{1,0} broadcast(bf16[] %p2.5), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %divide.226 = bf16[4,4]{1,0} divide(bf16[4,4]{1,0} %sqrt.224, bf16[4,4]{1,0} %broadcast.225), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %p1.3 = bf16[] parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %broadcast.227 = bf16[4,4]{1,0} broadcast(bf16[] %p1.3), dimensions={}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %add.228 = bf16[4,4]{1,0} add(bf16[4,4]{1,0} %divide.226, bf16[4,4]{1,0} %broadcast.227), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %divide.258 = bf16[4,4]{1,0} divide(bf16[4,4]{1,0} %add.243, bf16[4,4]{1,0} %add.228), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %p0.1 = f32[] parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %convert.257 = bf16[] convert(f32[] %p0.1), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %broadcast.259 = bf16[4,4]{1,0} broadcast(bf16[] %convert.257), dimensions={}, metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %multiply.260 = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %divide.258, bf16[4,4]{1,0} %broadcast.259), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %add.261 = bf16[4,4]{1,0} add(bf16[4,4]{1,0} %subtract.256, bf16[4,4]{1,0} %multiply.260), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %broadcast.314 = bf16[4]{0} broadcast(bf16[] %p16.250), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %multiply.315 = bf16[4]{0} multiply(bf16[4]{0} %p8.107, bf16[4]{0} %broadcast.314), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %constant.21 = bf16[] constant(0)
  %broadcast.15 = bf16[4]{0} broadcast(bf16[] %constant.21), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %multiply.318 = bf16[4]{0} multiply(bf16[4]{0} %multiply.315, bf16[4]{0} %broadcast.15), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %subtract.319 = bf16[4]{0} subtract(bf16[4]{0} %p8.107, bf16[4]{0} %multiply.318), metadata={op_type="aten__sub" op_name="aten__sub" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %constant.22 = bf16[] constant(0)
  %multiply.10 = bf16[] multiply(bf16[] %constant.22, bf16[] %p14.235), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %broadcast.19 = bf16[4]{0} broadcast(bf16[] %multiply.10), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/adamw.py" source_line=121}
  %constant.25 = bf16[1]{0} constant({1})
  %compare.271 = pred[1]{0} compare(bf16[1]{0} %divide.196, bf16[1]{0} %constant.25), direction=LT, metadata={op_type="aten__lt" op_name="aten__lt" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %constant.26 = bf16[1]{0} constant({1})
  %select.273 = bf16[1]{0} select(pred[1]{0} %compare.271, bf16[1]{0} %divide.196, bf16[1]{0} %constant.26), metadata={op_type="aten__where" op_name="aten__where" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %reshape.275 = bf16[] reshape(bf16[1]{0} %select.273), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %broadcast.276 = bf16[4]{0} broadcast(bf16[] %reshape.275), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %multiply.277 = bf16[4]{0} multiply(bf16[4]{0} %custom-call.12, bf16[4]{0} %broadcast.276), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %broadcast.298 = bf16[4]{0} broadcast(bf16[] %p13.229), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %multiply.299 = bf16[4]{0} multiply(bf16[4]{0} %multiply.277, bf16[4]{0} %broadcast.298), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %add.307 = bf16[4]{0} add(bf16[4]{0} %broadcast.19, bf16[4]{0} %multiply.299), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %constant.27 = bf16[] constant(0)
  %multiply.11 = bf16[] multiply(bf16[] %constant.27, bf16[] %p12.211), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %broadcast.22 = bf16[4]{0} broadcast(bf16[] %multiply.11), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/adamw.py" source_line=125}
  %multiply.286 = bf16[4]{0} multiply(bf16[4]{0} %multiply.277, bf16[4]{0} %multiply.277), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %convert.285 = bf16[] convert(f32[] %p3.6), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %broadcast.287 = bf16[4]{0} broadcast(bf16[] %convert.285), dimensions={}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %multiply.288 = bf16[4]{0} multiply(bf16[4]{0} %multiply.286, bf16[4]{0} %broadcast.287), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %add.289 = bf16[4]{0} add(bf16[4]{0} %broadcast.22, bf16[4]{0} %multiply.288), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %sqrt.290 = bf16[4]{0} sqrt(bf16[4]{0} %add.289), metadata={op_type="aten__sqrt" op_name="aten__sqrt" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %broadcast.291 = bf16[4]{0} broadcast(bf16[] %p2.5), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %divide.292 = bf16[4]{0} divide(bf16[4]{0} %sqrt.290, bf16[4]{0} %broadcast.291), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %broadcast.293 = bf16[4]{0} broadcast(bf16[] %p1.3), dimensions={}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %add.294 = bf16[4]{0} add(bf16[4]{0} %divide.292, bf16[4]{0} %broadcast.293), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %divide.321 = bf16[4]{0} divide(bf16[4]{0} %add.307, bf16[4]{0} %add.294), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %convert.320 = bf16[] convert(f32[] %p0.1), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %broadcast.322 = bf16[4]{0} broadcast(bf16[] %convert.320), dimensions={}, metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %multiply.323 = bf16[4]{0} multiply(bf16[4]{0} %divide.321, bf16[4]{0} %broadcast.322), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %add.324 = bf16[4]{0} add(bf16[4]{0} %subtract.319, bf16[4]{0} %multiply.323), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %broadcast.377 = bf16[1,4]{1,0} broadcast(bf16[] %p16.250), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %multiply.378 = bf16[1,4]{1,0} multiply(bf16[1,4]{1,0} %p7.64, bf16[1,4]{1,0} %broadcast.377), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %broadcast.379 = bf16[1,4]{1,0} broadcast(bf16[] %p15.249), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %multiply.381 = bf16[1,4]{1,0} multiply(bf16[1,4]{1,0} %multiply.378, bf16[1,4]{1,0} %broadcast.379), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %subtract.382 = bf16[1,4]{1,0} subtract(bf16[1,4]{1,0} %p7.64, bf16[1,4]{1,0} %multiply.381), metadata={op_type="aten__sub" op_name="aten__sub" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %constant.42 = bf16[] constant(0)
  %multiply.19 = bf16[] multiply(bf16[] %constant.42, bf16[] %p14.235), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %broadcast.26 = bf16[1,4]{1,0} broadcast(bf16[] %multiply.19), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/adamw.py" source_line=121}
  %constant.30 = bf16[1]{0} constant({1})
  %compare.334 = pred[1]{0} compare(bf16[1]{0} %divide.196, bf16[1]{0} %constant.30), direction=LT, metadata={op_type="aten__lt" op_name="aten__lt" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %constant.31 = bf16[1]{0} constant({1})
  %select.336 = bf16[1]{0} select(pred[1]{0} %compare.334, bf16[1]{0} %divide.196, bf16[1]{0} %constant.31), metadata={op_type="aten__where" op_name="aten__where" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %reshape.338 = bf16[] reshape(bf16[1]{0} %select.336), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %broadcast.53 = bf16[1,4]{1,0} broadcast(bf16[] %reshape.338), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %multiply.341 = bf16[1,4]{1,0} multiply(bf16[1,4]{1,0} %custom-call.11, bf16[1,4]{1,0} %broadcast.53), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %broadcast.362 = bf16[1,4]{1,0} broadcast(bf16[] %p13.229), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %multiply.363 = bf16[1,4]{1,0} multiply(bf16[1,4]{1,0} %multiply.341, bf16[1,4]{1,0} %broadcast.362), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %add.371 = bf16[1,4]{1,0} add(bf16[1,4]{1,0} %broadcast.26, bf16[1,4]{1,0} %multiply.363), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %constant.43 = bf16[] constant(0)
  %multiply.20 = bf16[] multiply(bf16[] %constant.43, bf16[] %p12.211), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %broadcast.32 = bf16[1,4]{1,0} broadcast(bf16[] %multiply.20), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/adamw.py" source_line=125}
  %multiply.350 = bf16[1,4]{1,0} multiply(bf16[1,4]{1,0} %multiply.341, bf16[1,4]{1,0} %multiply.341), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %convert.349 = bf16[] convert(f32[] %p3.6), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %broadcast.351 = bf16[1,4]{1,0} broadcast(bf16[] %convert.349), dimensions={}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %multiply.352 = bf16[1,4]{1,0} multiply(bf16[1,4]{1,0} %multiply.350, bf16[1,4]{1,0} %broadcast.351), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %add.353 = bf16[1,4]{1,0} add(bf16[1,4]{1,0} %broadcast.32, bf16[1,4]{1,0} %multiply.352), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %sqrt.354 = bf16[1,4]{1,0} sqrt(bf16[1,4]{1,0} %add.353), metadata={op_type="aten__sqrt" op_name="aten__sqrt" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %broadcast.355 = bf16[1,4]{1,0} broadcast(bf16[] %p2.5), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %divide.356 = bf16[1,4]{1,0} divide(bf16[1,4]{1,0} %sqrt.354, bf16[1,4]{1,0} %broadcast.355), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %broadcast.357 = bf16[1,4]{1,0} broadcast(bf16[] %p1.3), dimensions={}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %add.358 = bf16[1,4]{1,0} add(bf16[1,4]{1,0} %divide.356, bf16[1,4]{1,0} %broadcast.357), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %divide.384 = bf16[1,4]{1,0} divide(bf16[1,4]{1,0} %add.371, bf16[1,4]{1,0} %add.358), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %convert.383 = bf16[] convert(f32[] %p0.1), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %broadcast.385 = bf16[1,4]{1,0} broadcast(bf16[] %convert.383), dimensions={}, metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %multiply.386 = bf16[1,4]{1,0} multiply(bf16[1,4]{1,0} %divide.384, bf16[1,4]{1,0} %broadcast.385), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %add.387 = bf16[1,4]{1,0} add(bf16[1,4]{1,0} %subtract.382, bf16[1,4]{1,0} %multiply.386), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %p17.429 = bf16[1]{0} parameter(17), frontend_attributes={neff_input_names="input17"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %reshape.81 = bf16[1]{0} reshape(bf16[] %p16.250), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %multiply.431 = bf16[1]{0} multiply(bf16[1]{0} %p17.429, bf16[1]{0} %reshape.81), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %constant.35 = bf16[1]{0} constant({0})
  %multiply.434 = bf16[1]{0} multiply(bf16[1]{0} %multiply.431, bf16[1]{0} %constant.35), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %subtract.435 = bf16[1]{0} subtract(bf16[1]{0} %p17.429, bf16[1]{0} %multiply.434), metadata={op_type="aten__sub" op_name="aten__sub" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %constant.44 = bf16[] constant(0)
  %multiply.18 = bf16[] multiply(bf16[] %constant.44, bf16[] %p14.235), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %reshape.136 = bf16[1]{0} reshape(bf16[] %multiply.18), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %constant.39 = bf16[1]{0} constant({1})
  %compare.397 = pred[1]{0} compare(bf16[1]{0} %divide.196, bf16[1]{0} %constant.39), direction=LT, metadata={op_type="aten__lt" op_name="aten__lt" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %constant.40 = bf16[1]{0} constant({1})
  %select.399 = bf16[1]{0} select(pred[1]{0} %compare.397, bf16[1]{0} %divide.196, bf16[1]{0} %constant.40), metadata={op_type="aten__where" op_name="aten__where" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %multiply.400 = bf16[1]{0} multiply(bf16[1]{0} %custom-call.13, bf16[1]{0} %select.399), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=189}
  %reshape.92 = bf16[1]{0} reshape(bf16[] %p13.229), metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %multiply.418 = bf16[1]{0} multiply(bf16[1]{0} %multiply.400, bf16[1]{0} %reshape.92), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %add.424 = bf16[1]{0} add(bf16[1]{0} %reshape.136, bf16[1]{0} %multiply.418), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %constant.45 = bf16[] constant(0)
  %multiply.17 = bf16[] multiply(bf16[] %constant.45, bf16[] %p12.211), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %reshape.133 = bf16[1]{0} reshape(bf16[] %multiply.17), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %multiply.407 = bf16[1]{0} multiply(bf16[1]{0} %multiply.400, bf16[1]{0} %multiply.400), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %convert.406 = bf16[] convert(f32[] %p3.6), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %reshape.95 = bf16[1]{0} reshape(bf16[] %convert.406), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %multiply.409 = bf16[1]{0} multiply(bf16[1]{0} %multiply.407, bf16[1]{0} %reshape.95), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %add.410 = bf16[1]{0} add(bf16[1]{0} %reshape.133, bf16[1]{0} %multiply.409), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %sqrt.411 = bf16[1]{0} sqrt(bf16[1]{0} %add.410), metadata={op_type="aten__sqrt" op_name="aten__sqrt" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %reshape.96 = bf16[1]{0} reshape(bf16[] %p2.5), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %divide.413 = bf16[1]{0} divide(bf16[1]{0} %sqrt.411, bf16[1]{0} %reshape.96), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %reshape.97 = bf16[1]{0} reshape(bf16[] %p1.3), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %add.415 = bf16[1]{0} add(bf16[1]{0} %divide.413, bf16[1]{0} %reshape.97), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %divide.437 = bf16[1]{0} divide(bf16[1]{0} %add.424, bf16[1]{0} %add.415), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %convert.436 = bf16[] convert(f32[] %p0.1), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %reshape.98 = bf16[1]{0} reshape(bf16[] %convert.436), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %multiply.439 = bf16[1]{0} multiply(bf16[1]{0} %divide.437, bf16[1]{0} %reshape.98), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %add.440 = bf16[1]{0} add(bf16[1]{0} %subtract.435, bf16[1]{0} %multiply.439), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  ROOT %tuple.441 = (bf16[4,4]{1,0}, bf16[4]{0}, bf16[1,4]{1,0}, bf16[1]{0}, bf16[4,4]{1,0}, /*index=5*/bf16[1]{0}, bf16[1,4]{1,0}, bf16[4]{0}, bf16[4,4]{1,0}, bf16[1]{0}, /*index=10*/bf16[4,4]{1,0}, bf16[4,4]{1,0}, bf16[1,4]{1,0}, bf16[1,4]{1,0}, bf16[4]{0}, /*index=15*/bf16[4]{0}, bf16[1]{0}, bf16[1]{0}) tuple(bf16[4,4]{1,0} %add.261, bf16[4]{0} %add.324, bf16[1,4]{1,0} %add.387, bf16[1]{0} %add.440, bf16[4,4]{1,0} %p10.124, /*index=5*/bf16[1]{0} %multiply.400, bf16[1,4]{1,0} %multiply.341, bf16[4]{0} %multiply.277, bf16[4,4]{1,0} %multiply.210, bf16[1]{0} %power.191, /*index=10*/bf16[4,4]{1,0} %add.243, bf16[4,4]{1,0} %add.223, bf16[1,4]{1,0} %add.371, bf16[1,4]{1,0} %add.353, bf16[4]{0} %add.307, /*index=15*/bf16[4]{0} %add.289, bf16[1]{0} %add.424, bf16[1]{0} %add.410), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7,output8,output9,output10,output11,output12,output13,output14,output15,output16,output17"}
}

`

export default text;
