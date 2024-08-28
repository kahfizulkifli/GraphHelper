const text = `
HloModule SyncTensorsGraph.163, input_output_alias={ {0}: (4, {}, must-alias), {1}: (3, {}, must-alias) }

%AddComputation.59 (x.60: f32[], y.61: f32[]) -> f32[] {
  %x.60 = f32[] parameter(0)
  %y.61 = f32[] parameter(1)
  ROOT %add.62 = f32[] add(f32[] %x.60, f32[] %y.61)
}

%AddComputation.83 (x.84: f32[], y.85: f32[]) -> f32[] {
  %x.84 = f32[] parameter(0)
  %y.85 = f32[] parameter(1)
  ROOT %add.86 = f32[] add(f32[] %x.84, f32[] %y.85)
}

%AddComputation.101 (x.102: f32[], y.103: f32[]) -> f32[] {
  %x.102 = f32[] parameter(0)
  %y.103 = f32[] parameter(1)
  ROOT %add.104 = f32[] add(f32[] %x.102, f32[] %y.103)
}

%AddComputation.150 (x.151: f32[], y.152: f32[]) -> f32[] {
  %x.151 = f32[] parameter(0)
  %y.152 = f32[] parameter(1)
  ROOT %add.153 = f32[] add(f32[] %x.151, f32[] %y.152)
}

%AddComputation.156 (x.157: f32[], y.158: f32[]) -> f32[] {
  %x.157 = f32[] parameter(0)
  %y.158 = f32[] parameter(1)
  ROOT %add.159 = f32[] add(f32[] %x.157, f32[] %y.158)
}

ENTRY %SyncTensorsGraph.163 (p0.1: f32[], p1.6: f32[], p2.7: s64[16], p3.8: f32[10], p4.16: f32[10,784], p5.25: f32[16,1,28,28]) -> (f32[10,784], f32[10], f32[16,784], f32[16,10], f32[], /*index=5*/f32[10], f32[10,784]) {
  %p4.16 = f32[10,784]{1,0} parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p2.7 = s64[16]{0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.38 = s64[16,10]{1,0} broadcast(s64[16]{0} %p2.7), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %iota.1 = s64[16,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.41 = pred[16,10]{1,0} compare(s64[16,10]{1,0} %broadcast.38, s64[16,10]{1,0} %iota.1), direction=EQ, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.36 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.43 = f32[16,10]{1,0} broadcast(f32[] %constant.36), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.35 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.42 = f32[16,10]{1,0} broadcast(f32[] %constant.35), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.44 = f32[16,10]{1,0} select(pred[16,10]{1,0} %compare.41, f32[16,10]{1,0} %broadcast.43, f32[16,10]{1,0} %broadcast.42), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %negate.45 = f32[16,10]{1,0} negate(f32[16,10]{1,0} %select.44), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.48 = s64[] constant(-100), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.49 = s64[16]{0} broadcast(s64[] %constant.48), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.50 = pred[16]{0} compare(s64[16]{0} %p2.7, s64[16]{0} %broadcast.49), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.51 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.1 = f32[16]{0} broadcast(f32[] %constant.51), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.53 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.2 = f32[16]{0} broadcast(f32[] %constant.53), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.0 = f32[16]{0} select(pred[16]{0} %compare.50, f32[16]{0} %broadcast.1, f32[16]{0} %broadcast.2), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.4 = f32[16,10]{1,0} broadcast(f32[16]{0} %select.0), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.57 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %broadcast.4, f32[16,10]{1,0} %select.44), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.67 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %negate.45, f32[16,10]{1,0} %multiply.57), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.58 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %reduce.63 = f32[] reduce(f32[16,10]{1,0} %multiply.57, f32[] %constant.58), dimensions={0,1}, to_apply=%AddComputation.59, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.65 = pred[] compare(f32[] %reduce.63, f32[] %constant.58), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.64 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.66 = f32[] select(pred[] %compare.65, f32[] %reduce.63, f32[] %constant.64), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.68 = f32[16,10]{1,0} broadcast(f32[] %select.66), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %divide.69 = f32[16,10]{1,0} divide(f32[16,10]{1,0} %multiply.67, f32[16,10]{1,0} %broadcast.68), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.81 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.87 = f32[10]{0} reduce(f32[16,10]{1,0} %divide.69, f32[] %constant.81), dimensions={0}, to_apply=%AddComputation.83, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.4 = f32[10]{0} custom-call(f32[10]{0} %reduce.87), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p5.25 = f32[16,1,28,28]{3,2,1,0} parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="train_torchrun.py" source_line=84}
  %reshape.70 = f32[16,784]{1,0} reshape(f32[16,1,28,28]{3,2,1,0} %p5.25), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.71 = f32[784,16]{0,1} transpose(f32[16,784]{1,0} %reshape.70), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot = f32[10,784]{0,1} dot(f32[16,10]{1,0} %divide.69, f32[784,16]{0,1} %transpose.71), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.5 = f32[10,784]{1,0} custom-call(f32[10,784]{0,1} %dot), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p1.6 = f32[] parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %all-reduce.105 = (f32[10]{0}, f32[10,784]{1,0}, f32[]) all-reduce(f32[10]{0} %custom-call.4, f32[10,784]{1,0} %custom-call.5, f32[] %p1.6), replica_groups={}, constrain_layout=true, to_apply=%AddComputation.101, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.110 = f32[10,784]{1,0} get-tuple-element((f32[10]{0}, f32[10,784]{1,0}, f32[]) %all-reduce.105), index=1, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %p0.1 = f32[] parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %constant.111 = f32[] constant(0.5), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply = f32[] multiply(f32[] %p0.1, f32[] %constant.111), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.6 = f32[10,784]{1,0} broadcast(f32[] %multiply), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.115 = f32[10,784]{1,0} multiply(f32[10,784]{1,0} %get-tuple-element.110, f32[10,784]{1,0} %broadcast.6), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.116 = f32[10,784]{1,0} add(f32[10,784]{1,0} %p4.16, f32[10,784]{1,0} %multiply.115), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %p3.8 = f32[10]{0} parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %get-tuple-element.106 = f32[10]{0} get-tuple-element((f32[10]{0}, f32[10,784]{1,0}, f32[]) %all-reduce.105), index=0, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %constant.107 = f32[] constant(0.5), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.2 = f32[] multiply(f32[] %p0.1, f32[] %constant.107), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.7 = f32[10]{0} broadcast(f32[] %multiply.2), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.121 = f32[10]{0} multiply(f32[10]{0} %get-tuple-element.106, f32[10]{0} %broadcast.7), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.122 = f32[10]{0} add(f32[10]{0} %p3.8, f32[10]{0} %multiply.121), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %reshape.26 = f32[16,784]{1,0} reshape(f32[16,1,28,28]{3,2,1,0} %p5.25), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %custom-call.6 = f32[10,784]{1,0} custom-call(f32[10,784]{1,0} %p4.16), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.24 = f32[784,10]{0,1} transpose(f32[10,784]{1,0} %custom-call.6), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.27 = f32[16,10]{1,0} dot(f32[16,784]{1,0} %reshape.26, f32[784,10]{0,1} %transpose.24), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %custom-call.7 = f32[10]{0} custom-call(f32[10]{0} %p3.8), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.31 = f32[16,10]{1,0} broadcast(f32[10]{0} %custom-call.7), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.32 = f32[16,10]{1,0} add(f32[16,10]{1,0} %dot.27, f32[16,10]{1,0} %broadcast.31), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %broadcast.126 = s64[16,10]{1,0} broadcast(s64[16]{0} %p2.7), dimensions={0}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %iota.3 = s64[16,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.129 = pred[16,10]{1,0} compare(s64[16,10]{1,0} %broadcast.126, s64[16,10]{1,0} %iota.3), direction=EQ, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.124 = f32[] constant(1), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.131 = f32[16,10]{1,0} broadcast(f32[] %constant.124), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.123 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.130 = f32[16,10]{1,0} broadcast(f32[] %constant.123), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.132 = f32[16,10]{1,0} select(pred[16,10]{1,0} %compare.129, f32[16,10]{1,0} %broadcast.131, f32[16,10]{1,0} %broadcast.130), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.135 = f32[16,10]{1,0} broadcast(f32[] %constant.124), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.136 = pred[16,10]{1,0} compare(f32[16,10]{1,0} %select.132, f32[16,10]{1,0} %broadcast.135), direction=NE, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.137 = f32[16,10]{1,0} broadcast(f32[] %constant.123), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %negate.133 = f32[16,10]{1,0} negate(f32[16,10]{1,0} %select.132), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.134 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %negate.133, f32[16,10]{1,0} %add.32), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.138 = f32[16,10]{1,0} select(pred[16,10]{1,0} %compare.136, f32[16,10]{1,0} %broadcast.137, f32[16,10]{1,0} %multiply.134), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.139 = s64[] constant(-100), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.140 = s64[16]{0} broadcast(s64[] %constant.139), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.141 = pred[16]{0} compare(s64[16]{0} %p2.7, s64[16]{0} %broadcast.140), direction=NE, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.142 = f32[] constant(1), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.8 = f32[16]{0} broadcast(f32[] %constant.142), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.144 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.9 = f32[16]{0} broadcast(f32[] %constant.144), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.1 = f32[16]{0} select(pred[16]{0} %compare.141, f32[16]{0} %broadcast.8, f32[16]{0} %broadcast.9), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.10 = f32[16,10]{1,0} broadcast(f32[16]{0} %select.1), dimensions={0}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.148 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %broadcast.10, f32[16,10]{1,0} %select.132), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.155 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %select.138, f32[16,10]{1,0} %multiply.148), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %reduce.160 = f32[] reduce(f32[16,10]{1,0} %multiply.155, f32[] %constant.123), dimensions={0,1}, to_apply=%AddComputation.156, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.149 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %reduce.154 = f32[] reduce(f32[16,10]{1,0} %multiply.148, f32[] %constant.149), dimensions={0,1}, to_apply=%AddComputation.150, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %divide.161 = f32[] divide(f32[] %reduce.160, f32[] %reduce.154), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.108 = f32[10]{0} broadcast(f32[] %constant.107), dimensions={}, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.109 = f32[10]{0} multiply(f32[10]{0} %get-tuple-element.106, f32[10]{0} %broadcast.108), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %broadcast.112 = f32[10,784]{1,0} broadcast(f32[] %constant.111), dimensions={}, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.113 = f32[10,784]{1,0} multiply(f32[10,784]{1,0} %get-tuple-element.110, f32[10,784]{1,0} %broadcast.112), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  ROOT %tuple.162 = (f32[10,784]{1,0}, f32[10]{0}, f32[16,784]{1,0}, f32[16,10]{1,0}, f32[], /*index=5*/f32[10]{0}, f32[10,784]{1,0}) tuple(f32[10,784]{1,0} %add.116, f32[10]{0} %add.122, f32[16,784]{1,0} %reshape.26, f32[16,10]{1,0} %add.32, f32[] %divide.161, /*index=5*/f32[10]{0} %multiply.109, f32[10,784]{1,0} %multiply.113), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6"}
}


`
export default text;
