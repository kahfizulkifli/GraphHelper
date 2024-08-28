const text = `
HloModule SyncTensorsGraph.75

%scalar_add_computation (scalar_lhs: f32[], scalar_rhs: f32[]) -> f32[] {
  %scalar_lhs = f32[] parameter(0)
  %scalar_rhs = f32[] parameter(1)
  ROOT %add = f32[] add(f32[] %scalar_lhs, f32[] %scalar_rhs)
}

ENTRY %SyncTensorsGraph.75_spmd (param.6: f32[1], param.5: f32[1,1], param.4: f32[1], param.3: f32[1,5], param.2: f32[5], param.1: f32[5,10], param: f32[10,10]) -> (f32[10,1]) {
  %param = f32[10,10]{1,0} parameter(6), sharding={replicated}, frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %param.1 = f32[5,10]{1,0} parameter(5), sharding={replicated}, frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.14 = f32[5,10]{1,0} custom-call(f32[5,10]{1,0} %param.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.0 = f32[10,5]{0,1} transpose(f32[5,10]{1,0} %custom-call.14), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.2 = f32[10,5]{1,0} dot(f32[10,10]{1,0} %param, f32[10,5]{0,1} %transpose.0), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %param.2 = f32[5]{0} parameter(4), sharding={replicated}, frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.15 = f32[5]{0} custom-call(f32[5]{0} %param.2), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.19 = f32[10,5]{1,0} broadcast(f32[5]{0} %custom-call.15), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.5 = f32[10,5]{1,0} add(f32[10,5]{1,0} %dot.2, f32[10,5]{1,0} %broadcast.19), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.3 = f32[] constant(0), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %broadcast.20 = f32[10,5]{1,0} broadcast(f32[] %constant.3), dimensions={}, metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %maximum.0 = f32[10,5]{1,0} maximum(f32[10,5]{1,0} %add.5, f32[10,5]{1,0} %broadcast.20), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %param.3 = f32[1,5]{1,0} parameter(3), sharding={replicated}, frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.16 = f32[1,5]{1,0} custom-call(f32[1,5]{1,0} %param.3), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.49 = f32[5]{0} reshape(f32[1,5]{1,0} %custom-call.16)
  %broadcast.21 = f32[10,5]{1,0} broadcast(f32[5]{0} %reshape.49), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %multiply.4 = f32[10,5]{1,0} multiply(f32[10,5]{1,0} %maximum.0, f32[10,5]{1,0} %broadcast.21)
  %reduce.1 = f32[10]{0} reduce(f32[10,5]{1,0} %multiply.4, f32[] %constant.3), dimensions={1}, to_apply=%scalar_add_computation, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %param.4 = f32[1]{0} parameter(2), sharding={replicated}, frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.17 = f32[1]{0} custom-call(f32[1]{0} %param.4), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.50 = f32[] reshape(f32[1]{0} %custom-call.17)
  %broadcast.22 = f32[10]{0} broadcast(f32[] %reshape.50), dimensions={}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.6 = f32[10]{0} add(f32[10]{0} %reduce.1, f32[10]{0} %broadcast.22), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %param.5 = f32[1,1]{1,0} parameter(1), sharding={replicated}, frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.18 = f32[1,1]{1,0} custom-call(f32[1,1]{1,0} %param.5), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.51 = f32[] reshape(f32[1,1]{1,0} %custom-call.18)
  %broadcast.23 = f32[10]{0} broadcast(f32[] %reshape.51), dimensions={}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %multiply.5 = f32[10]{0} multiply(f32[10]{0} %add.6, f32[10]{0} %broadcast.23), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %param.6 = f32[1]{0} parameter(0), sharding={replicated}, frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.19 = f32[1]{0} custom-call(f32[1]{0} %param.6), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.52 = f32[] reshape(f32[1]{0} %custom-call.19)
  %broadcast.24 = f32[10]{0} broadcast(f32[] %reshape.52), dimensions={}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.7 = f32[10]{0} add(f32[10]{0} %multiply.5, f32[10]{0} %broadcast.24), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %reshape.53 = f32[10,1]{1,0} reshape(f32[10]{0} %add.7), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  ROOT %tuple = (f32[10,1]{1,0}) tuple(f32[10,1]{1,0} %reshape.53), frontend_attributes={neff_output_names="output0"}
}


`

export default text;
