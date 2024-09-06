const text = `
HloModule SyncTensorsGraph.65

%scalar_add_computation (scalar_lhs: f32[], scalar_rhs: f32[]) -> f32[] {
  %scalar_lhs = f32[] parameter(0)
  %scalar_rhs = f32[] parameter(1)
  ROOT %add = f32[] add(f32[] %scalar_lhs, f32[] %scalar_rhs)
}

%AddComputation.50 (x.51: bf16[], y.52: bf16[]) -> bf16[] {
  %x.51 = bf16[] parameter(0)
  %y.52 = bf16[] parameter(1)
  ROOT %add.53 = bf16[] add(bf16[] %x.51, bf16[] %y.52)
}

ENTRY %SyncTensorsGraph.65 (p0.1: bf16[1], p1.9: bf16[1,4], p2.18: bf16[4], p3.26: bf16[4,4], p4.35: bf16[4,4]) -> (bf16[]) {
  %p4.35 = bf16[4,4]{1,0} parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="run_simple_model_nxd.py" source_line=155}
  %p3.26 = bf16[4,4]{1,0} parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %custom-call.5 = bf16[4,4]{1,0} custom-call(bf16[4,4]{1,0} %p3.26), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.34 = bf16[4,4]{0,1} transpose(bf16[4,4]{1,0} %custom-call.5), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.36 = bf16[4,4]{1,0} dot(bf16[4,4]{1,0} %p4.35, bf16[4,4]{0,1} %transpose.34), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p2.18 = bf16[4]{0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %custom-call.6 = bf16[4]{0} custom-call(bf16[4]{0} %p2.18), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.40 = bf16[4,4]{1,0} broadcast(bf16[4]{0} %custom-call.6), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.41 = bf16[4,4]{1,0} add(bf16[4,4]{1,0} %dot.36, bf16[4,4]{1,0} %broadcast.40), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p1.9 = bf16[1,4]{1,0} parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %custom-call.7 = bf16[1,4]{1,0} custom-call(bf16[1,4]{1,0} %p1.9), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.3 = bf16[4]{0} reshape(bf16[1,4]{1,0} %custom-call.7)
  %broadcast.2 = bf16[4,4]{1,0} broadcast(bf16[4]{0} %reshape.3), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %multiply = bf16[4,4]{1,0} multiply(bf16[4,4]{1,0} %add.41, bf16[4,4]{1,0} %broadcast.2)
  %convert = f32[4,4]{1,0} convert(bf16[4,4]{1,0} %multiply)
  %constant = f32[] constant(0)
  %reduce = f32[4]{0} reduce(f32[4,4]{1,0} %convert, f32[] %constant), dimensions={1}, to_apply=%scalar_add_computation
  %convert.1 = bf16[4]{0} convert(f32[4]{0} %reduce), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p0.1 = bf16[1]{0} parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %custom-call.8 = bf16[1]{0} custom-call(bf16[1]{0} %p0.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.7 = bf16[] reshape(bf16[1]{0} %custom-call.8)
  %broadcast.3 = bf16[4]{0} broadcast(bf16[] %reshape.7), dimensions={}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.1 = bf16[4]{0} add(bf16[4]{0} %convert.1, bf16[4]{0} %broadcast.3), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.48 = bf16[] constant(0), metadata={op_type="aten__mean" op_name="aten__mean" source_file="run_simple_model_nxd.py" source_line=53}
  %reduce.54 = bf16[] reduce(bf16[4]{0} %add.1, bf16[] %constant.48), dimensions={0}, to_apply=%AddComputation.50, metadata={op_type="aten__mean" op_name="aten__mean" source_file="run_simple_model_nxd.py" source_line=53}
  %constant.4 = bf16[] constant(0.25)
  %multiply.62 = bf16[] multiply(bf16[] %reduce.54, bf16[] %constant.4), metadata={op_type="aten__mean" op_name="aten__mean" source_file="run_simple_model_nxd.py" source_line=53}
  ROOT %tuple.64 = (bf16[]) tuple(bf16[] %multiply.62), frontend_attributes={neff_output_names="output0"}
}

`

export default text;
